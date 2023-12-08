import { useCallback, useRef, useState } from "react"

/**
 * Use this hooks to manage a list of item
 * Allow consumer to remove item from the list except for the last remaining item
 */
interface IKey {
    key: number;
}
export const useListItems = <Item extends IKey>(initialItems: Item[]) => {
    const [items, setItems] = useState(initialItems);
    const nextKeyCounter = useRef(initialItems.length);

    const onRemoveItem = useCallback((itemToRemove: Item) => {
        const newList = items.filter(currItem => {
            return currItem.key !== itemToRemove.key;
        });
        if (newList.length === 0) return;
        setItems(newList);
    }, [items]);

    const onAddItem = useCallback((itemToAdd: Item) => {
        const newList = [...items];
        nextKeyCounter.current += 1;
        newList.push({
            ...itemToAdd,
            key: nextKeyCounter.current,
        })
        setItems(newList);
    }, [items])

    return {
        items,
        onRemoveItem,
        onAddItem
    };
}