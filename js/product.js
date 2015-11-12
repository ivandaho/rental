//----------------------------------------------------------------
// product class
function product(sku, name, description, price, cal, carot, vitc, folate, potassium, fiber) {
    this.sku = sku; // product code (SKU = stock keeping unit)
    this.name = name;
    this.description = description;
    this.price = price;
    this.cal = cal;
    this.nutrients = {
        "Carotenoid": carot,
        "Vitamin C": vitc,
        "Folates": folate,
        "Potassium": potassium,
        "Fiber": fiber
    };

}
function gear(sku, brand, name, desc, ava, withwho, specs, batdur, weight, highlighted, cat) {
    this.sku = sku; // product code (SKU = stock keeping unit)
    this.brand = brand;
    this.name = name;
    this.desc = desc;
    this.ava = ava; // availability
    this.withwho = withwho;
    this.specs = specs;
    this.batdur = batdur;
    this.weight = weight;
    this.highlighted = highlighted;
    this.cat = cat;
}


    // id, make/brand, model, description, available, with, video capabilities, battery duration, weight.
    // pic can use id

