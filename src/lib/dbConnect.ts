import mongoose from 'mongoose';

type ConnectionObject = {
    isConnected?: number
}

const connection: ConnectionObject = {}

async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log('Already connected to database');
        return
    }
    try {
        await mongoose.connect()
        // 1:1:54


    } catch (error) {

    }
}