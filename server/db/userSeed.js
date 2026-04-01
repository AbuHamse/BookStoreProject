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
            const username = faker.internet.username(); // Generate once to use as a seed

            users.push({
                firstName: faker.person.firstName().padEnd(4, 'x'),
                lastName: faker.person.lastName().padEnd(4, 'x'),
                
                // --- FIXED IMAGE LINKS ---
                // 1. FREE AVATAR: Using DiceBear (Stable & Fast)
                avatarPicture: `https://api.dicebear.com/7.x/notionists/svg?seed=${username}`,
                
                // 2. FREE PROFILE PIC: Using Picsum (High-res photography)
                profilePicture: `https://picsum.photos/seed/${username}${i}/800/600`,
                // -------------------------

                bio: faker.person.bio(),
                username: username,
                email: faker.internet.email(),
                password: faker.location.country(), 
                role: faker.helpers.arrayElement(['user', 'admin']),
                
                // Age and Company handled by your Mongoose defaults!
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