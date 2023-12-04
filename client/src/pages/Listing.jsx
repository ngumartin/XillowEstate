import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Listing() {
    const [listing, setListing] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const params = useParams();
    useEffect(() => {
        const fetchListing = async () => {

            try {
                setLoading(true);
                const res = await fetch(`/api/listing/get/${params.listingId}`)
                const data = await res.json();
                if (data.success === false) {
                    setError(true);
                    setLoading(false);
                    return;
                }
                setListing(data);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        };
        fetchListing();
    });
    return (
    <div>{listing && listing.name}</div>
    );
};
