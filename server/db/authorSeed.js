import 'dotenv/config';
import mongoose from 'mongoose';
import connectToDB from './db.js';
import Author from '../models/Author.js';
import { faker } from '@faker-js/faker';

const authorSeedDB = async () => {
    try {
        await connectToDB();
        console.log('Connected to MongoDB... 🚀');

        // 1. Wipe current data
        await Author.deleteMany({});
        console.log('Old authors removed.');

        const authors = [];

        for (let i = 0; i < 50; i++) {
            // We generate the gender first to keep the names consistent
            const gender = faker.person.sex(); // returns 'male' or 'female'

            authors.push({
                // We use padEnd to ensure we hit the 4-character minlength requirement
                firstName: faker.person.firstName(gender).padEnd(4, 'x'),
                lastName: faker.person.lastName().padEnd(4, 'x'),
                jobType: faker.person.jobType(),
                profilePicture: faker.image.url(),
                bio: faker.person.bio(),
                email: faker.internet.email(),
                gender: gender, 
                role: faker.helpers.arrayElement(['user', 'admin']),
                
                // Note: We ARE NOT providing age or company here.
                // Mongoose will automatically call getRandomAge and getRandomCompany
                // because they are defined as defaults in your schema.
            });
        }

        // 2. Insert the array
        await Author.insertMany(authors);
        console.log(`Successfully seeded 50 authors! 🌱`);

        // 3. Close and Exit
        await mongoose.connection.close();
        process.exit(0);

    } catch (error) {
        console.error('❌ Seeding Error:', error.message);
        process.exit(1);
    }
};

authorSeedDB();