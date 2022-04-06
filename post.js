import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core/'

import './styles.css';
import mentorImg from '../../assets/mentor1.jpg'
import MovieCard from "../../MovieCard";
const post = () => {
    return (
        <Card className="card" >
            <CardMedia className="card-media" image={mentorImg || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} />
            <div className="Test">
                <Typography variant="h6">Mentor Name</Typography>
                <Typography variant="body">Mentor Qulification</Typography>
            </div>
        </Card>
    )
}

export default post;