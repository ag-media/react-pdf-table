import useResizeObserver from '@react-hook/resize-observer';
import * as faker from 'faker';
import {useLayoutEffect, useState} from 'react';

export interface HumanRow {
    firstName: string,
    lastName: string,
    dob: Date,
    age: number,
    city: string,
    gender: 'male' | 'female',
    height: number,
    phoneNumber: string,
    country: string,
}

export function generateRandomData(count: number): HumanRow[] {
    const output: HumanRow[] = [];

    for (let i = 0; i < count; i++) {
        const dob = faker.date.past(100);

        output.push({
            firstName: faker.name.findName(),
            lastName: faker.name.lastName(),
            dob,
            age: Math.floor((Date.now() - dob.getTime()) / (1000 * 60 * 60 * 24 * 365.25)),
            country: faker.address.country(),
            city: faker.address.city(),
            phoneNumber: faker.phone.phoneNumber(),
            gender: Math.random() > 0.5 ? 'male' : 'female',
            height: Math.round((Math.random() + 1.3) * 10) / 10,
        });
    }

    return output;
}


export function useSize(target: React.RefObject<HTMLElement>, prop: 'width' | 'height'): number | undefined {
    const [size, setSize] = useState<number>();

    useLayoutEffect(() => {
        if (!target.current) {
            return;
        }

        setSize(target.current.getBoundingClientRect()[prop]);
    }, [target]);

    useResizeObserver(target, (entry) => setSize(entry.contentRect[prop]));

    return size;
}
