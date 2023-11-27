import { Card, CardContent, CardMedia, Typography } from "@mui/material"; // Importing necessary components from the "@mui/material" library
import React from "react"; // Importing the React library

function ItemDetails({ item }) { // Defining a function called "ItemDetails" which takes a parameter called "item"
    return (
        <>
            <Card> // Rendering a Card component
                <CardMedia // Rendering a CardMedia component
                    sx={{ height: 140 }} // Setting the style of the CardMedia component
                    image={item.largeImageURL} // Setting the image prop of the CardMedia component
                />
                <CardContent> // Rendering a CardContent component
                    <Typography gutterBottom variant="h5" component="div"> // Rendering a Typography component
                        {item.tags} // Using the "tags" property of the "item" object as the content of the Typography component
                    </Typography>
                    <Typography variant="body2" color="text.secondary"> // Rendering a Typography component
                        Views: {item.views} // Using the "views" property of the "item" object as the content of the Typography component
                    </Typography>
                    <Typography variant="body2" color="text.secondary"> // Rendering a Typography component
                        Downloads: {item.downloads} // Using the "downloads" property of the "item" object as the content of the Typography component
                    </Typography>
                    <Typography variant="body2" color="text.secondary"> // Rendering a Typography component
                        Collections: {item.collections} // Using the "collections" property of the "item" object as the content of the Typography component
                    </Typography>
                    <Typography variant="body2" color="text.secondary"> // Rendering a Typography component
                        Likes: {item.likes} // Using the "likes" property of the "item" object as the content of the Typography component
                    </Typography>
                    <Typography variant="body2" color="text.secondary"> // Rendering a Typography component
                        Comments: {item.comments} // Using the "comments" property of the "item" object as the content of the Typography component
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}

export default ItemDetails // Exporting the ItemDetails function
