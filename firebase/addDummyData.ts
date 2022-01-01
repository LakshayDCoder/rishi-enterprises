import { collection, Timestamp, addDoc, getDocs } from "firebase/firestore";
import { db } from "./clientApp";

type MyBrand = { name: String; image: String; dateAdded: Timestamp };

type MyProduct = {
	brand: String;
	image: String;
	meta: String;
	mrp: String;
	title: String;
	weight: String;
	dateAdded: Timestamp;
};

type MyShops = {
	Address_Line1: String;
	Adhar: String;
	city: String;
	district: String;
	image: String;
	owner_name: String;
	owner_number: String;
	shop_name: String;
	shop_number: String;
	state: String;
	type: String;
	zip: String;
};

type MyPriceCollection = {
	shop_id: String;
	product_id: String;
	your_price: String;
	in_stock: boolean;
};

const brandCollRef = collection(db, "brand");
const productCollRef = collection(db, "products");
const shopCollRef = collection(db, "shopkeepers");
const myPriceCollRef = collection(db, "my_price_collection");

async function addBrands() {
	let brands: Array<MyBrand> = [];

	for (var i = 1; i <= 10; i++) {
		var myItem = {
			name: `Brand ${i}`,
			image: `https://picsum.photos/1024/1024?random=${i}`,
			dateAdded: Timestamp.now(),
		};
		brands.push(myItem);
		console.log("Added Item: " + myItem.name);
	}

	console.log("Start");
	for (let index = 0; index < brands.length; index++) {
		const item = brands[index];
		const res = await addDoc(brandCollRef, item);
		console.log("Added Data: " + res.id);
	}
	console.log("End");
}

async function addProducts() {
	var docSnap = await getDocs(brandCollRef);
	var myBrandArray: Array<String> = [];
	var products = [];

	// Add brands id to an array
	docSnap.forEach((doc) => {
		myBrandArray.push(doc.id.toString());
	});
	console.log("Got brands IDs");

	// Add dummy products to array
	for (var i = 1; i <= 100; i++) {
		var myItem: MyProduct = {
			brand: myBrandArray[Math.floor(Math.random() * myBrandArray.length)],
			title: `My Product Title - ${i}`,
			mrp: Math.floor(Math.random() * i * i).toString(),
			weight: `${Math.floor(Math.random() * i * 10)} gm`,
			meta: `meta${i}, product${i}`,
			image: `https://picsum.photos/1024/1024?random=${i}`,
			dateAdded: Timestamp.now(),
		};
		products.push(myItem);
		console.log("Added Item: " + myItem);
	}

	console.log("Start");
	for (let index = 0; index < products.length; index++) {
		const item = products[index];
		const res = await addDoc(productCollRef, item);
		console.log("Added Data: ");
	}
	console.log("End");
}

async function addShops() {
	let shops: Array<MyShops> = [];

	for (var i = 1; i <= 9; i++) {
		var myItem: MyShops = {
			Address_Line1: `My Shop address line ${i}`,
			Adhar: ``,
			image: `https://picsum.photos/1920/1080?random=${i}`,
			owner_name: `Owner Name ${i}`,
			owner_number: (1111111111 * i).toString(),
			shop_name: `My Shop Name - ${i}`,
			shop_number: Math.floor(Math.random() * 10000000000).toString(),
			state: `My State ${Math.floor(Math.random() * 10)}`,
			city: `My City ${Math.floor(Math.random() * 10)}`,
			district: `My District ${Math.floor(Math.random() * 10)}`,
			zip: Math.floor(Math.random() * 1000000).toString(),
			type: `2`,
		};
		shops.push(myItem);
		console.log("Added Item: " + myItem);
	}

	// console.log(shops[13]);

	console.log("Start");
	for (let index = 0; index < shops.length; index++) {
		const item = shops[index];
		const res = await addDoc(shopCollRef, item);
		console.log("Added Data: ");
	}
	console.log("End");
}

function randomNoRepeats(array: Array<String>) {
	var copy = array.slice(0);
	return function () {
		if (copy.length < 1) {
			copy = array.slice(0);
		}
		var index = Math.floor(Math.random() * copy.length);
		var item = copy[index];
		copy.splice(index, 1);
		return item;
	};
}

async function addMyPriceCollection() {
	var docSnap = await getDocs(productCollRef);
	var docSnap1 = await getDocs(shopCollRef);
	var myProductsArray: Array<String> = [];
	var myShopArray: Array<String> = [];
	var myPriceColArray: Array<MyPriceCollection> = [];

	// Add products id to an array
	docSnap.forEach((doc) => {
		myProductsArray.push(doc.id.toString());
	});
	console.log("Got Products IDs");

	// Add shops id to an array
	docSnap1.forEach((doc) => {
		myShopArray.push(doc.id.toString());
	});
	console.log("Got Shops IDs");

	var productId = randomNoRepeats(myProductsArray);

	// Add data to myPriceCollection array
	for (let shopId of myShopArray) {
		for (let i = 0; i < 20; i++) {
			var myItem: MyPriceCollection = {
				shop_id: shopId,
				product_id: productId(),
				your_price: Math.floor(Math.random() * 10 * i).toString(),
				in_stock: true,
			};
			myPriceColArray.push(myItem);
			console.log("Added Item to Array: " + myItem);
		}
	}

	// console.log(myPriceColArray[3]);

	// console.log("Start");
	// for (let index = 0; index < myPriceColArray.length; index++) {
	// 	const item = myPriceColArray[index];
	// 	const res = await addDoc(myPriceCollRef, item);
	// 	console.log("Added Data");
	// }
	// console.log("End");
}

export { addBrands, addProducts, addShops, addMyPriceCollection };
