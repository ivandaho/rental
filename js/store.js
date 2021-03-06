//----------------------------------------------------------------
// store (contains the products)
//
// NOTE: nutritional info from http://www.cspinet.org/images/fruitcha.jpg
// score legend:
// 0: below 5% of daily value (DV)
// 1: 5-10% DV
// 2: 10-20% DV
// 3: 20-40% DV
// 4: above 40% DV
//
function store() {
    this.products = [
        //new product("APL", "Apple", "Eat one every day to keep the doctor away!", 12, 90, 0, 2, 0, 1, 2),
        /*
        new product("AVC", "Avocado", "Guacamole anyone?", 16, 90, 0, 1, 1, 1, 2),
        new product("BAN", "Banana", "These are rich in Potassium and easy to peel.", 4, 120, 0, 2, 1, 2, 2),
        new product("CTP", "Cantaloupe", "Delicious and refreshing.", 3, 50, 4, 4, 1, 2, 0),
        new product("FIG", "Fig", "OK, not that nutritious, but sooo good!", 10, 100, 0, 0, 0, 1, 2),
        new product("GRF", "Grapefruit", "Pink or red, always healthy and delicious.", 11, 50, 4, 4, 1, 1, 1),
        new product("GRP", "Grape", "Wine is great, but grapes are even better.", 8, 100, 0, 3, 0, 1, 1),
        new product("GUA", "Guava", "Exotic, fragrant, tasty!", 8, 50, 4, 4, 0, 1, 2),
        new product("KIW", "Kiwi", "These come from New Zealand.", 14, 90, 1, 4, 0, 2, 2),
        new product("LYC", "Lychee", "Unusual and highly addictive!", 18, 125, 1, 4, 0, 2, 2),
        new product("MAN", "Mango", "Messy to eat, but well worth it.", 8, 70, 3, 4, 0, 1, 1),
        new product("ORG", "Orange", "Vitamin C anyone? Go ahead, make some juice.", 9, 70, 1, 4, 2, 1, 2),
        new product("PAP", "Papaya", "Super-popular for breakfast.", 5, 60, 3, 4, 2, 2, 2),
        new product("PCH", "Peach", "Add some cream and enjoy.", 19, 70, 1, 2, 0, 1, 2),
        new product("PER", "Pear", "Delicious fresh, or cooked in red wine, or distilled.", 8, 100, 0, 2, 0, 1, 2),
        new product("PMG", "Pomegranate", "Delicious, healthy, beautiful, and sophisticated!", 19, 110, 0, 2, 0, 2, 0),
        new product("PNP", "Pineapple", "Enjoy it (but don't forget to peel first).", 4, 60, 0, 3, 0, 0, 1),
        new product("PSM", "Persimmon", "Believe it or not, they are berries!", 6, 120, 4, 3, 0, 1, 3),
        new product("STR", "Strawberry", "Beautiful, healthy, and delicious.", 7, 40, 0, 4, 1, 1, 2),
        new product("TNG", "Tangerine", "Easier to peel than oranges!", 8, 50, 3, 4, 1, 1, 2),
        new product("WML", "Watermelon", "Nothing comes close on those hot summer days.", 4, 90, 4, 4, 0, 1, 1)
        */
        new product("S4K", "Sony", "4k", "The good sony 4k camera.", true, "nobody", "1920x1080 60fps", "5 hours", "6 lbs", "white", "camera"),
        new product("PA1", "Panasonic", "avc something", "panasonic camera.", true, "nobody", "wsomething80 30fps, 1920x1080 24fps, 1280x720 60fps", "4 hours", "4.5 lbs", "white", "camera"),
        new product("PA2", "Panasonic", "avc something 2", "other panasonic camera", false, "nobody", "barely decent", "3 hours", "3 lbs", "white", "camera"),
        new product("MB1", "Audio-Technica", "ATR3350 bundle A", "lapel mic bundle of 2 mics and receivers", true, "nobody", "96khz or something", "10 hours", "1 lbs", "white", "mic"),
        new product("MB2", "Audio-Technica", "ATR3350 bundle B", "lapel mic bundle of 2 mics and receivers", true, "nobody", "96khz or something", "10 hours", "1 lbs", "white", "mic"),
        new product("MZ1", "Zoom", "H1", "stereo microphone", true, "nobody", "96khz or something, stereo", "8 hours", "0.5 lbs", "white", "mic"),
        new product("MT1", "Tascam", "DR-05", "stereo microphone", true, "nobody", "96khz or something, stereo", "6 hours", "0.5 lbs", "white", "mic"),
        new product("TM1", "Manfrotto", "190x3 something I don't know", "some Manfrotto tripod that does the job.", true, "nobody", "fluid head or something", "N/A", "5.5 lbs", "white", "tripod")
    ];
    /*
    this.equipment = [
        new gear("S4K", "Sony", "4k", "The good sony 4k camera.", true, "nobody", "1920x1080 60fps, 1920x1080 30fps, 1920x1080 24fps, 1280x720 60fps", "5 hours", "6 lbs", "white", "camera"),
        new gear("PA1", "Panasonic", "avc something", "panasonic camera.", true, "nobody", "wsomething80 30fps, 1920x1080 24fps, 1280x720 60fps", "4 hours", "4.5 lbs", "white", "camera"),
        new gear("PA2", "Panasonic", "avc something 2", "other panasonic camera", true, "nobody", "barely decent", "3 hours", "3 lbs", "white", "camera"),
        new gear("MB1", "Audio-Technica", "ATR3350 bundle A", "lapel mic bundle of 2 mics and receivers", true, "nobody", "96khz or something", "10 hours", "1 lbs", "white", "mic"),
        new gear("MB2", "Audio-Technica", "ATR3350 bundle B", "lapel mic bundle of 2 mics and receivers", true, "nobody", "96khz or something", "10 hours", "1 lbs", "white", "mic"),
        new gear("MZ1", "Zoom", "H1", "stereo microphone", true, "nobody", "96khz or something, stereo", "8 hours", "0.5 lbs", "white", "mic"),
        new gear("MT1", "Tascam", "DR-05", "stereo microphone", true, "nobody", "96khz or something, stereo", "6 hours", "0.5 lbs", "white", "mic")
        
    
    */

    newcc = function (gear) {
    for (var i = 0; i < this.equipment.length; i++) {
        if (this.equipment[i].sku === equipment.sku) {
            this.equipment[i].selected = false;

            break;
        }
    }
};
        

    this.dvaCaption = [
        "Negligible",
        "Low",
        "Average",
        "Good",
        "Great"
    ];
    this.dvaRange = [
        "below 5%",
        "between 5 and 10%",
        "between 10 and 20%",
        "between 20 and 40%",
        "above 40%"
    ];
}
store.prototype.getProduct = function (sku) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].sku == sku)
            return this.products[i];
    }
    return null;
}

