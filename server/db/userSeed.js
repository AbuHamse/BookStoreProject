import 'dotenv/config'
import mongoose from 'mongoose';
import connectToDB from './db.js';
import Users from '../models/User.js';
import { faker } from '@faker-js/faker';

const userSeedDB = async () => {
    try {
        await connectToDB();
        console.log('Connected to MongoDB... 🚀');

        // 1. Wipe current data
        await Users.deleteMany({});
        console.log('Old Users removed.');

        const users = [];

        for (let i = 0; i < 30; i++) {
        
            users.push({
                // We use padEnd to ensure we hit the 4-character minlength requirement
                firstName: faker.person.firstName().padEnd(4, 'x'),
                lastName: faker.person.lastName().padEnd(4, 'x'),
                avatarPicture: faker.image.avatar(),
                profilePicture: faker.image.url(),
                bio: faker.person.bio(),
                username: faker.internet.username(),
                email: faker.internet.email(),
                password: faker.location.country(), 
                role: faker.helpers.arrayElement(['user', 'admin']),
                
                // Note: We ARE NOT providing age or company here.
                // Mongoose will automatically call getRandomAge and getRandomCompany
                // because they are defined as defaults in your schema.
            });
        }

        // 2. Insert the array
        await Users.insertMany(users);
        console.log(`Successfully seeded ${users.length} users! 🌱`);

        // 3. Close and Exit
        await mongoose.connection.close();
        process.exit(0);

    } catch (error) {
        console.error('❌ Seeding Error:', error.message);
        process.exit(1);
    }
};

userSeedDB();