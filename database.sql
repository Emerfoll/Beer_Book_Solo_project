
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
('Hunahpu`s Imperial Stout - Double Barrel Aged', 'Stout', 11, 'Cigar City Brewing'),
('Barrel-Aged Abraxas', 'Stout', 11, 'Perennial Artisan Ales'),
('Heady Topper', 'IPA', 8, 'The Alchemist'),
('Pliny The Younger', 'IPA', 10.25, 'Russian River Brewing Company'),
('Mornin Delight', 'Stout', 12.8, 'Toppling Goliath Brewing Company'),
('Juice Machine', 'IPA', 8.2, 'Tree House Brewing Company'),
('King Julius', 'IPA', 8.3, 'Tree House Brewing Company'),
('Very Hazy', 'IPA', 8.6, 'Tree House Brewing Company'),
('Fundamental Observation', 'Stout', 14.3, 'Bottle Logic Brewing'),

('CBS', 'Stout', 11.3, 'Founders Brewing Company'),
('Pliny The Elder', 'IPA', 8, 'Russian River Brewing Company'),
('Morning Wood', 'Porter', 12, 'Funky Buddha Brewery'),
('Westly', 'Ale', 8.5, 'Sante Adairius Rustic Ales'),
('Very Green', 'IPA', 8.6, 'Tree House Brewing Company'),
('Abner', 'IPA', 8.2, 'Hill Farmstead Brewery'),
('Double Sunshine', 'IPA', 8, 'Lawson`s Finest Liquids'),
('Barrel Aged Imperial German Chocolate Cupcake Stout', 'Stout', 11, 'Angry Chair Brewing'),
('Bourbon County Brand Stout', 'Stout' 14.7, 'Goose Island Beer Co.'),
('Dinner', 'IPA', 8.2, 'Maine Beer Company'),

('Parabola', 'Stout', 13, 'Firestone Walker Brewing Co.'),
('Fuzzy', 'ALE', 8, 'Side Project Brewing'),
('Ann', 'Ale', 6.5, 'Hill Farmstead Brewery'),
('Doubleganger', 'IPA', 8.2, 'Tree House Brewing Company'),
('Zombie Dust', 'Ale', 6.2, '3 Floyds Brewing Co.'),
('Chemtrailmix', 'Stout', 15, '3 Floyds Brewing Co.'),
('Atrial Rubicite', 'Ale', 5.8, 'Jester King Brewery'),
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

