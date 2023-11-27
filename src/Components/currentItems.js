// Importing required packages and modules
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../Redux/actions/itemsSlice';
import { useEffect, useState } from 'react';
import { Dialog, DialogContent, ImageList } from '@mui/material';
import { ImageListItem, Button } from '@mui/material';
import '../css/currentItems.css';
import ItemDetails from './itemDetails';

// Define the CurrentItems component
function CurrentItems({ category }) {
    const dispatch = useDispatch();
    const itemsList = useSelector((state) => state?.items?.itemsList);
    const totalPages = useSelector((state) => state?.items?.totalPages);
    const [currentPage, setCurrentPage] = useState(1);
    const [openDialog, setOpenDialog] = useState(false);
    const [currentItem, setCurrentItem] = useState({});

    useEffect(() => {
        dispatch(fetchItems({ currentPage, category }));
    }, [currentPage, category]);

    // Handle previous page button click
    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Handle next page button click
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Handle item click to open dialog
    const handleClickToOpen = (item) => {
        setOpenDialog(true);
        setCurrentItem(item);
    };

    // Handle close dialog button click
    const handleClickToClose = () => {
        setOpenDialog(false);
    };

    return (
        <div id="container-div">
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
                prev
            </button>
            <ImageList cols={3} rowHeight={250}>
                {itemsList.map((item, key) => (
                    <>
                        <ImageListItem key={key} onClick={() => handleClickToOpen(item)}>
                            <img
                                src={`${item.largeImageURL}?w=164&h=164&fit=crop&auto=format`}
                                alt={item.tags}
                                loading="lazy"
                            />
                        </ImageListItem>
                        <Dialog open={openDialog} onClose={handleClickToClose} key={item.id}>
                            <DialogContent>
                                <ItemDetails item={currentItem}></ItemDetails>
                            </DialogContent>
                            <Button onClick={handleClickToClose}
                                color="primary" autoFocus>
                                Close
                            </Button>
                        </Dialog></>
                ))}
            </ImageList>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>next</button>
        </div>
    );
}

export default CurrentItems;
