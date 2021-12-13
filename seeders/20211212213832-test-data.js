'use strict';
const long_description = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.`;
const brief_description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';


module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('User', [
                {
                user_uuid: '1d00ad74-79d4-43bf-82d3-89cd7ad1fc22',
                name: 'John',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                user_uuid: '1d00ad74-79d4-43bf-82d3-89cd7ad1fc21',
                name: 'Jane',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                user_uuid: '1d00ad74-79d4-43bf-82d3-89cd7ad1fc23',
                name: 'Bob',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                user_uuid: '1d00ad74-79d4-43bf-82d3-89cd7ad1fc20',
                name: 'Alice',
                created_at: new Date(),
                updated_at: new Date()
            }]);

        await queryInterface.bulkInsert('Company', [
                {
                company_uuid: 'd951deda-65c9-4020-bb9f-e61078785813',
                name: 'Google',
                website: 'https://www.google.com/',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                company_uuid: 'd951deda-65c9-4020-bb9f-e61078785812',
                name: 'Apple',
                website: 'https://www.apple.com/',
                created_at: new Date(),
                updated_at: new Date()
            }]);

        await queryInterface.bulkInsert('Apps', [{
                brief_description,
                long_description,
                app_uuid: '8ce16aa8-beaf-4d94-9c28-7cab9f924304',
                company_uuid: 'd951deda-65c9-4020-bb9f-e61078785813',
                name: 'Football',
                icon: 'https://picsum.photos/seed/picsum/200/300',
                price: 0,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                brief_description,
                long_description,
                app_uuid: '8ce16aa8-beaf-4d94-9c28-7cab9f924300',
                company_uuid: 'd951deda-65c9-4020-bb9f-e61078785813',
                name: 'Youtube',
                icon: 'https://picsum.photos/200/300?grayscale',
                price: 20,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                brief_description,
                long_description,
                app_uuid: '8ce16aa8-beaf-4d94-9c28-7cab9f924303',
                company_uuid: 'd951deda-65c9-4020-bb9f-e61078785812',
                name: 'Basketball',
                icon: 'https://picsum.photos/200/300/?blur',
                price: 20,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                brief_description,
                long_description,
                app_uuid: '8ce16aa8-beaf-4d94-9c28-7cab9f924305',
                company_uuid: 'd951deda-65c9-4020-bb9f-e61078785812',
                name: 'Apple Tv',
                icon: 'https://picsum.photos/id/237/200/300',
                price: 100,
                created_at: new Date(),
                updated_at: new Date()
            }]);

        await queryInterface.bulkInsert('user_app', [
            {
                user_uuid: '1d00ad74-79d4-43bf-82d3-89cd7ad1fc22',
                app_uuid: '8ce16aa8-beaf-4d94-9c28-7cab9f924304',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                user_uuid: '1d00ad74-79d4-43bf-82d3-89cd7ad1fc23',
                app_uuid: '8ce16aa8-beaf-4d94-9c28-7cab9f924305',
                created_at: new Date(),
                updated_at: new Date()
            }]);

        return await queryInterface.bulkInsert('Payment', [
            {
                app_uuid: '8ce16aa8-beaf-4d94-9c28-7cab9f924304',
                user_uuid: '1d00ad74-79d4-43bf-82d3-89cd7ad1fc22',
                amount: 30,
                owner_fee: 10,
                company_fee: 20,
                status: 1,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                user_uuid: '8ce16aa8-beaf-4d94-9c28-7cab9f924303',
                app_uuid: '8ce16aa8-beaf-4d94-9c28-7cab9f924304',
                amount: 30,
                owner_fee: 10,
                company_fee: 20,
                status: 1,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                user_uuid: '1d00ad74-79d4-43bf-82d3-89cd7ad1fc23',
                app_uuid: '8ce16aa8-beaf-4d94-9c28-7cab9f924305',
                amount: 30,
                owner_fee: 10,
                company_fee: 20,
                status: 1,
                created_at: new Date(),
                updated_at: new Date()
            }])
    },
};
