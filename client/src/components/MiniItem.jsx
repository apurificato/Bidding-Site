import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AuctionTimer from './AuctionTimer';
import AuctionImage from './AuctionImage';
import BidButton from './BidButton'; 
import AcceptBidButton from './AcceptBidButton';
import PayNowButton from './PayNowButton';

const MiniItem = ({ item }) => {
    const [bidValue, setBidValue] = useState(item.currentBid + 1);
    const { user } = useAuth();
    const isSeller = user.id === item.seller.id;
    const isCompleted = item.isCompleted;

    return (

        <div className="card h-100 mb-3 mini-item bg-dark text-light">
            <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0 text-light font-weight-bold">{item.name}</h5>
                <Link to={`/products/${item.id}`} className="btn btn-primary">View Details</Link>
            </div>
            <div className="card-body d-flex flex-column justify-content-between">
                <div className="mb-3">
                    <AuctionImage imageId={item.imageId} itemName={item.name} />
                </div>
                <div className="mb-3">
                    <p className="mb-1"><strong>Seller:</strong> {item.seller.username}</p>
                    <p className="mb-1"><strong>Current Bid:</strong> ${bidValue - 1}</p>
                    <p className="mb-1"><strong>High Bidder:</strong> {item.highBidder?.username || 'None'}</p>
                    <AuctionTimer item={item} />
                </div>
                <div className="text-center">
                    {isCompleted ? (
                        <PayNowButton item={item} />
                    ) : isSeller ? (
                        <AcceptBidButton item={item} />
                    ) : (
                        <BidButton item={item} bidValue={bidValue} setBidValue={setBidValue} />
                    )}
                </div>
            </div>
        </div>

    );
};

export default MiniItem;