import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";

// Function to get items for a specific user
export async function getItems(userId) {
  const items = [];
  const itemsCollection = collection(db, "users", userId, "items");
  const q = query(itemsCollection, where("userId", "==", userId));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });

  return items;
}

// Function to add an item for a specific user
export async function addItem(userId, newItem) {
  const itemsCollection = collection(db, "users", userId, "items");
  const docRef = await addDoc(itemsCollection, newItem);
  return docRef.id;
}
