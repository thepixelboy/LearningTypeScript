var displayName = "Jeff's standing desk";
var inventoryType = "furniture";
var trackingNumber = "FD123455";
var createDate = new Date();
var originalCost = 425;
var InvetoryItemType;
(function (InvetoryItemType) {
    InvetoryItemType["Computer"] = "computer";
    InvetoryItemType["Furniture"] = "furniture";
})(InvetoryItemType || (InvetoryItemType = {}));
function getInventoryItem(trackingNumber) {
    return null;
}
function saveInventoryItem(item) {
}
var inventoryItem = getInventoryItem(trackingNumber);
inventoryItem.createDate = new Date();
saveInventoryItem({
    displayName: "MacBook Pro 15 Retina",
    inventoryType: "computer",
    trackingNumber: "MBP123456",
    createDate: new Date(),
});
