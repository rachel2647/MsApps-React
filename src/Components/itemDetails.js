import { Card, CardContent, CardMedia, Typography } from "@mui/material"; 
import React from "react";

function ItemDetails({ item }) { 
    return (
        <>
            <Card> 
                <CardMedia
                    sx={{ height: 140 }} 
                    image={item.largeImageURL} 
                />
                <CardContent> 
                    <Typography gutterBottom variant="h5" component="div"> 
                        {item.tags}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Views: {item.views} 
                    </Typography>
                    <Typography variant="body2" color="text.secondary"> 
                        Downloads: {item.downloads}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Collections: {item.collections}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Likes: {item.likes}
                    </Typography>
                    <Typography variant="body2" color="text.secondary"> 
                        Comments: {item.comments}
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}

export default ItemDetails // Exporting the ItemDetails function
