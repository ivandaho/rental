//----------------------------------------------------------------
// product class
//function product(sku, name, description, price, cal, carot, vitc, folate, potassium, fiber) {
function product(sku, brand, name, desc, ava, withwho, maxres, batdur, weight, highlighted, cat) {
    this.sku = sku; // product code (SKU = stock keeping unit)
    this.name = name;
    //this.description = description;
    this.price = 1;
    //this.cal = cal;

    this.specs = {
        "Capabilities": maxres,
        "Battery Life": batdur,
        "Weight": weight,
    };

    this.brand = brand;
    this.desc = desc;
    this.ava = ava; // availability
    this.withwho = withwho;
    //this.specs = specs;
    this.batdur = batdur;
    this.weight = weight;
    this.highlighted = highlighted;
    this.cat = cat;

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

