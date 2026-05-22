import React, {useState} from "react";
import {InputTextForm} from "@/app/components/forms/input/InputTextForm";

export function StarForm() {
    const [rating, setRating] = useState<number>(0);
    const [hover, setHover] = useState<number>(0);

    return (
        <>
            <div>
                {[1, 2, 3, 4, 5].map((star) => (
                    <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHover(star)}
                        onMouseLeave={() => setHover(0)}
                        className={"text-yellow-400 text-4xl"}
                    >
                        {star <= (hover || rating) ? "★" : "☆"}
                    </button>


                ))}
            </div>
            <input type="hidden" name="rating" value={rating} />

            <InputTextForm type={"text"} name={"questionfin"} label={"Des questions/remarques?"}/>
        </>
    );
}