import repeat from "@bakkerjoeri/repeat";
import { choose } from "roll-the-bones";

export default function pick<TypeOfItem>(
    items: TypeOfItem[],
    amount: number,
    putBack = false
): TypeOfItem[] {
    if (amount > items.length) {
        throw new Error(`Can't randomly pick ${amount} items from an array that's only ${items.length} long.`)
    }

    const picks: TypeOfItem[] = [];

    repeat(amount, () => {
        const choice = choose(items);
        picks.push(choice);

        if (!putBack) {
            items = items.filter(item => item !== choice);
        }
    });

    return picks;
}