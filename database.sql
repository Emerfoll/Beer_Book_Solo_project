
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
CREATE TABLE "beers" (
    "id" SERIAL PRIMARY KEY,
    "beer_name" VARCHAR (80) UNIQUE NOT NULL,
    "style" VARCHAR (1000) NOT NULL,
    "abv" INT,
    "brewery" VARCHAR (80)
);

INSERT INTO "beers" ("beer_name", "style", "abv", "brewery")
VALUES ('Bud Light', 'Lager', 4.2, 'Anheuser-Busch InBev'),
('Heineken', 'Lager', 5, 'Heineken International'),
('Guinness', 'Stout', 4.2, 'Diageo'),
('Pabst Blue Ribbon', 'Lager', 4.8, 'Pabst Brewing Company'),
('Blue Moon', 'Wheat', 5.4, 'MillerCoors'),
('Dos Equis', 'Lager', 4.2, 'Heineken International'),
('Steel Reserve', 'Malt', 8.1, 'MillerCoors'),
('Grain Belt Premium', 'American Lager', 4.6, 'August Schell Brewing Company'),
('Grain Belt Nordeast', 'Lager', 4.7, 'August Schell Brewing Company'),
('Kentucky Brunch Brand Stout', 'Stout', 12, 'Kentucky Brunch Brand Stout'),

('Marshmallow Handjee', 'Stout', 15, '3 Floyds Brewing Co.'),
('Hunahpu''s Imperial Stout - Double Barrel Aged', 'Stout', 11, 'Cigar City Brewing'),
('Barrel-Aged Abraxas', 'Stout', 11, 'Perennial Artisan Ales'),
('Heady Topper', 'IPA', 8, 'The Alchemist'),
('Pliny The Younger', 'IPA', 10.25, 'Russian River Brewing Company'),
('Mornin'' Delight', 'Stout', 12.8, 'Toppling Goliath Brewing Company'),
('Juice Machine', 'IPA', 8.2, 'Tree House Brewing Company'),
('King Julius', 'IPA', 8.3, 'Tree House Brewing Company'),
('Very Hazy', 'IPA', 8.6, 'Tree House Brewing Company'),
('Fundamental Observation', 'Stout', 14.3, 'Bottle Logic Brewing'),

('CBS', 'Stout', 11.3, 'Founders Brewing Company'),
('Pliny The Elder', 'IPA', 8, 'Russian River Brewing Company'),
('Morning Wood', 'Porter', 12, 'Funky Buddha Brewery'),
('Westly', 'Wild Ale', 8.5, 'Sante Adairius Rustic Ales'),
('Very Green', 'IPA', 8.6, 'Tree House Brewing Company'),
('Abner', 'IPA', 8.2, 'Hill Farmstead Brewery'),
('Double Sunshine', 'IPA', 8, 'Lawson''s Finest Liquids'),
('Barrel Aged Imperial German Chocolate Cupcake Stout', 'Stout', 11, 'Angry Chair Brewing'),
('Bourbon County Brand Stout', 'Stout', 14.7, 'Goose Island Beer Co.'),
('Dinner', 'IPA', 8.2, 'Maine Beer Company'),

('Parabola', 'Stout', 13, 'Firestone Walker Brewing Co.'),
('Fuzzy', 'Wild Ale', 8, 'Side Project Brewing'),
('Ann', 'Farmhouse Ale', 6.5, 'Hill Farmstead Brewery'),
('Doubleganger', 'IPA', 8.2, 'Tree House Brewing Company'),
('Zombie Dust', 'Pale Ale', 6.2, '3 Floyds Brewing Co.'),
('Chemtrailmix', 'Stout', 15, '3 Floyds Brewing Co.'),
('Atrial Rubicite', 'Wild Ale', 5.8, 'Jester King Brewery'),
('Double Galaxy', 'IPA', 8, 'Hill Farmstead Brewery'),
('King Sue', 'IPA', 7.8, 'Toppling Goliath Brewing Company'),
('Maman', 'Stout', 11.5, 'Perennial Artisan Ales'),

('Everett Porter', 'Porter', 7.5, 'Hill Farmstead Brewery'),
('Porter', 'Porter', 6.5, 'Founders Brewing Company'),
('Imperial Coffee And Cigarettes', 'Porter', 10.4, 'Cellarmaker Brewing Co.'),
('Breakfast Stout', 'Stout', 8.3, 'Founders Brewing Company'),
('Moment Of Clarity', 'Stout', 7.7, 'Tree House Brewing Company'),
('River Guide', 'Wheat', 7, 'Berkshire Brewing Company Inc.'),
('White', 'Wheat', 5.1, 'Allagash Brewing Company'),
('Twice the Daily Serving: Raspberry', 'Sour', 7, 'Trillium Brewing Company'),
('Voodoo Ranger Juicy Haze IPA', 'IPA', 7.5, 'New Belgium Brewing Company'),
('CPB', 'Porter', 2.25, 'Lupulin Brewing'),

('Voodoo Ranger Imperial IPA', 'IPA', 9, 'New Belgium Brewing Company'),
('Hooey', 'IPA', 6.2, 'Lupulin Brewing'),
('Day Tripper Pale Ale', 'Pale Ale', 4.2, 'Indeed Brewing Company - Minneapolis'),
('Stir Crazy', 'Porter', 6.5, 'Indeed Brewing Company - Minneapolis'),
('Lavender, Sunflower Honey and Date Honey Ale - LSD', 'Herb and Spice', 7.2, 'Indeed Brewing Company - Minneapolis'),
('Mexican Honey Imperial Lager', 'Pilsner', 8, 'Indeed Brewing Company - Minneapolis'),
('Dark Side Vanilla Porter', 'Porter', 5.7, 'Empyrean Brewing Company'),
('Burning Skye Scottish Style Ale', 'Scottish Ale', 5.3, 'Empyrean Brewing Company'),
('Long Route Peanut Butter Porter', 'Porter', 6, 'Empyrean Brewing Company'),
('Watch Man IPA', 'IPA', 6, 'Empyrean Brewing Company'),

('Schell''s Dark', 'Lager', 4.8, 'August Schell Brewing Company'),
('Weekend - Bourbon Barrel-Aged', 'Stout', 14.2, 'Prairie Artisan Ales'),
('Juice Project', 'IPA', 8.4, 'Tree House Brewing Company'),
('Eternity', 'Stout', 11.8, 'Tree House Brewing Company'),
('Thundertaker', 'Stout', 14.6, 'Revolution Brewing'),
('Mocha Noir', 'Stout', 14.2, 'Prairie Artisan Ales'),
('Mega Treat', 'IPA', 8.7, 'Tree House Brewing Company'),
('Bourbon County Brand Kentucky Fog Stout', 'Stout', 14.1, 'Goose Island Beer Co.'),
('Truth - Vanilla Bean', 'Stout', 13.2, 'Tree House Brewing Company'),
('Curiosity One Hundred', 'IPA', 8.4, 'Tree House Brewing Company'),

('Loaded French Toast Imperial Stout', 'Stout', 11, 'Untitled Art'),
('Holy Ghost', 'IPA', 11, 'Parish Brewing Company'),
('Space Jam', 'Stout', 13.99, 'Bottle Logic Brewing'),
('Irish Cream Stout', 'Stout', 5.8, 'Tin Whiskers Brewing Company'),
('Witch Bot', 'IPA', 6.5, 'Tin Whiskers Brewing Company'),
('Peanut Butter Cup Imperial Stout', 'Stout', 9.8, 'Tin Whiskers Brewing Company'),
('Mississippi Mud Black & Tan', 'Porter', 5, 'Mississippi Brewing Co.'),
('Dragon Fandango', 'Sour', 5, 'Toppling Goliath Brewing Company'),
('Pompeii', 'IPA', 5.8, 'Toppling Goliath Brewing Company'),
('Coffee Assassin', 'Stout', 0, 'Toppling Goliath Brewing Company'),

('Norseman''s Wrath', 'Stout', 9, 'Toppling Goliath Brewing Company'),
('Vanilla Bean Assassin', 'Stout', 12.8, 'Toppling Goliath Brewing Company'),
('Twisted Galaxy', 'IPA', 8, 'Toppling Goliath Brewing Company'),
('Watershed Wheat', 'Sheat', 0, 'Toppling Goliath Brewing Company'),
('Dragon''s Milk', 'Stout', 11, 'New Holland Brewing Company'),
('Milk Stout Nitro', 'Stout', 6, 'Left Hand Brewing Company'),
('Dead Irish Poet', 'Stout', 7, 'Finnegans Brew Co.'),
('Black Is Beautiful', 'Stout', 10, 'Lake Monster Brewing'),
('Blood Orange IPA', 'IPA', 6.5, 'Lake Monster Brewing'),
('Chocolate Vanilla Pastry Stout', 'Stout', 5.7, 'Lake Monster Brewing'),

('Chocolate Porter', 'Porter', 7.2, 'Lake Monster Brewing'),
('Size 11', 'IPA', 11, 'Steel Toe Brewing'),
('Size 7', 'IPA', 7, 'Steel Toe Brewing'),
('Size 4', 'IPA', 4.5, 'Steel Toe Brewing'),
('Sissel Raspberry Wheat', 'Wheat', 4.9, 'Steel Toe Brewing'),
('Summer Shandy', 'Fruit and Field Beer', 4.2, 'Jacob Leinenkugel Brewing Company'),
('Snowdrift Vanilla Porter', 'Porter', 6, 'Jacob Leinenkugel Brewing Company'),
('Honey Weiss', 'Wheat', 4.9, 'Jacob Leinenkugel Brewing Company'),
('Creamy Dark', 'Lager', 4.9, 'Jacob Leinenkugel Brewing Company'),
('Red Lager', 'Lager', 4.9, 'Jacob Leinenkugel Brewing Company');

