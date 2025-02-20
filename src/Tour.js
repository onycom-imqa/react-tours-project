import React, { useState } from 'react';
import {useIMQA} from "imqa-react-sdk";

const Tour = ({id, image, info, price, name, removeTour}) => {
    const IMQARef = useIMQA(); // 삽입
    const [readMore, setReadMore] = useState(false)
    return (
        <div ref={IMQARef}>
            <article className='single-tour'>
                <img src={image} alt={name}/>
                <footer>
                    <div className='tour-info'>
                        <h4>{name}</h4>
                        <h4 className='tour-price'>${price}</h4>
                    </div>

                    <p>{readMore ? info : `${info.substring(0, 200)}...`
                    }
                        <button onClick={() => setReadMore(!readMore)}>
                            {readMore ? 'show less': 'read more'}
                        </button>
                    </p>
                    <button className='delete-btn' onClick={() => removeTour(id)}>
                        not interested
                    </button>
                </footer>
            </article>
        </div>
    )
};

export default Tour;
