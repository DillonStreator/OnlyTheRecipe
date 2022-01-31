export const supportedDomains = [
    'allrecipes.com',
    'bettycrocker.com',
    'blueberry.org',
    'bonappetit.com',
    'budgetbytes.com',
    'cookingclassy.com',
    'cooking.nytimes.com',
    'delish.com',
    'epicurious.com',
    'foodnetwork.com',
    'gimmesomeoven.com',
    'loveandlemons.com',
    'ice.edu',
    'inspiredtaste.net',
    'onceuponachef.com',
    'pillsbury.com',
    'sallysbakingaddiction.com',
    'simplyrecipes.com',
    'tasteofhome.com',
    'tasty.co',
    'thepioneerwoman.com',
    'thestayathomechef.com',
] as const;

export const domainIsSupported = (domain: string): boolean => {
    return supportedDomains.find((d) => d === domain) !== undefined
}

export const annoyingToParseDomains = [
    'bonappetit.com',
] as const;

export const domainIsAnnoyingToParse = (domain: string): boolean => {
    return annoyingToParseDomains.find((d) => d === domain) !== undefined
}

type recipeSelectorSet = {
    titleSelector: string,
    ingredientsSelector: string,
    ingredientsAmountSelector?: string,
    directionsSelector: string,
}

type domainInformationSelector = { [key in typeof supportedDomains[number]]?: recipeSelectorSet };

export const recipeSelectors: domainInformationSelector = {
    'allrecipes.com' : {
        titleSelector: 'div[class="headline-wrapper"] > h1',
        ingredientsSelector: 'section[data-tracking-zone="recipe-ingredients"] > fieldset > ul > li',
        directionsSelector: 'ul[class="instructions-section"] > li',
    },
    'bettycrocker.com' : {
        titleSelector: 'h1[class="rdpTitle"]',
        ingredientsSelector: 'div[class="rdpIngredients"] > ul > li',
        directionsSelector: 'ul[class="recipeSteps"] > li',
    },
    'blueberry.org' : {
        titleSelector: 'h1[itemprop="name"]',
        ingredientsSelector: 'div[class="ingredients"] > ul > li',
        directionsSelector: 'section[itemprop="recipeInstructions"] > div > ol > li',
    },
    'budgetbytes.com' : {
        titleSelector: 'h1[class="title"]',
        ingredientsSelector: 'ul[class="wprm-recipe-ingredients"] > li',
        directionsSelector: 'ul[class="wprm-recipe-instructions"] > li',
    },
    'cookingclassy.com' : {
        titleSelector: 'h1[class="title"]',
        ingredientsSelector: 'ul[class="wprm-recipe-ingredients"] > li',
        directionsSelector: 'ul[class="wprm-recipe-instructions"] > li',
    },
    'cooking.nytimes.com' : {
        titleSelector: 'h1[class="recipe-title title name"]',
        ingredientsSelector: 'ul[class="recipe-ingredients"] > li',
        directionsSelector: 'ol[class="recipe-steps"] > li',
    },
    'delish.com' : {
        titleSelector: 'h1[class="content-hed recipe-hed"]',
        ingredientsSelector: 'div[class="ingredient-lists"] > div[class="ingredient-item"] > span[class="ingredient-description"] > p',
        ingredientsAmountSelector: 'div[class="ingredient-lists"] > div[class="ingredient-item"] > span[class="ingredient-amount"]',
        directionsSelector: 'div[class="direction-lists"] > ol > li',
    },
    'epicurious.com' : {
        titleSelector: 'h1[data-testid="ContentHeaderHed"]',
        ingredientsSelector: 'div[data-testid="IngredientList"] > div > div',
        directionsSelector: 'div[data-testid="InstructionsWrapper"] > div > div',
    },
    'foodnetwork.com' : {
        titleSelector: 'section[class="o-AssetTitle"] > h1 > span',
        ingredientsSelector: 'section[class="o-Ingredients"] > div > p',
        directionsSelector: 'section[data-module="recipe-method"] > div > ol > li',
    },
    'gimmesomeoven.com' : {
        titleSelector: 'h1[class="posttitle"]',
        ingredientsSelector: 'div[class="tasty-recipes-ingredients-body"] > ul > li',
        directionsSelector: 'div[class="tasty-recipes-instructions-body"] > ol > li',
    },
    'ice.edu' : {
        titleSelector: 'h1',
        ingredientsSelector: 'ul > li',
        directionsSelector: 'ol > li',
    },
    'inspiredtaste.net' : {
        titleSelector: 'div[class="itr-recipe-title"] > h2',
        ingredientsSelector: 'span[class="itr-ingredients"] > p',
        directionsSelector: 'span[class="itr-directions"] > p',
    },
    'loveandlemons.com' : {
        titleSelector: 'h1[class="entry-title"] > a',
        ingredientsSelector: 'ul[class="wprm-recipe-ingredients"] > li',
        directionsSelector: 'ul[class="wprm-recipe-instructions"] > li',
    },
    'onceuponachef.com' : {
        titleSelector: 'h1[class="title"]',
        ingredientsSelector: 'div[class="ingredients"] > ul > li > span[class="name"]',
        ingredientsAmountSelector: 'div[class="ingredients"] > ul > li > span[class="amount"]',
        directionsSelector: 'div[class="instructions"] > ol > li',
    },
    'pillsbury.com' : {
        titleSelector: 'h1[class="rdpTitle"]',
        ingredientsSelector : 'div[class="rdpIngredients"] > ul > li',
        directionsSelector: 'ul[class="recipeSteps"] > li'
    },
    'sallysbakingaddiction.com' : {
        titleSelector: 'h2[class="tasty-recipes-title"]',
        ingredientsSelector: 'div[class="tasty-recipes-ingredients-body"] > ul > li',
        directionsSelector: 'div[class="tasty-recipes-instructions-body"] > ol > li'
    },
    'simplyrecipes.com' : {
        titleSelector: 'h1[class="heading__title"]',
        ingredientsSelector: 'div[class="comp structured-ingredients"] > ul > li',
        directionsSelector: 'section[class="comp section--instructions section"] > div > div > ol > li > p',
    },
    'tasteofhome.com' : {
        titleSelector: 'h1[class="recipe-title"]',
        ingredientsSelector: 'div[class="recipe-ingredients"] > ul > li',
        directionsSelector: 'ol[class="recipe-directions__list"] > li',
    },
    'tasty.co' : {
        titleSelector: 'h1[class="recipe-name extra-bold xs-mb05 md-mb1"]',
        ingredientsSelector: 'div[class="ingredients-prep clearfix col"] > div > div > ul > li',
        directionsSelector: 'div[class="ingredients-prep clearfix col"] > div > ol > li',
    },
    'thepioneerwoman.com' : {
        titleSelector: 'h1[class="content-hed recipe-hed"]',
        ingredientsSelector: 'div[class="ingredient-lists"] > div',
        directionsSelector: 'div[class="direction-lists"] > ol > li',
    },
    'thestayathomechef.com' : {
        titleSelector: 'header[class="article-header"] > h1',
        ingredientsSelector: 'ul[class="wprm-recipe-ingredients"] > li',
        directionsSelector: 'ul[class="wprm-recipe-instructions"] > li',
    },
}

// Wishlist:
// NYTimesCooking has ingredients per item, it'd be cool to group ingredients: https://cooking.nytimes.com/recipes/1018626-eggs-benedict
//                                                                             https://www.cookingclassy.com/chicken-curry/
// Tasty.co has two copies of the HTML ingredients ?? No idea why, but it needs to be trimmed on processing.
// not specific enough https://www.ice.edu/blog/chocolate-chip-cookie-recipe-smoke-butter
// Weird 'deselect all' https://www.foodnetwork.com/recipes/alton-brown/cocoa-brownies-recipe-2085484
// cafedelites.com
// 
// unify into one selector object with sub objects for each domain