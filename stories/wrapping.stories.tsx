import React, {useMemo} from 'react';

import {TD, TH, TR, Table} from '../src';

import {generateRandomData} from './common';
import PDFContainer from './components/PDFContainer';

export const Wrapping = () => {
    const data = useMemo(() => generateRandomData(80), []);

    return (
        <PDFContainer title="Wrapping">
            <Table tdStyle={{padding: '2px'}}>
                <TH fixed style={{fontSize: 14}}>
                    <TD>First Name</TD>
                    <TD>Last Name</TD>
                    <TD>DOB</TD>
                    <TD>Country</TD>
                    <TD>Phone Number</TD>
                </TH>
                {data.map((human, index) => (
                    <TR key={index}>
                        <TD>{human.firstName}</TD>
                        <TD>{human.lastName}</TD>
                        <TD>{human.dob.toLocaleString()}</TD>
                        <TD>{human.country}</TD>
                        <TD>{human.phoneNumber}</TD>
                    </TR>
                ))}
            </Table>
        </PDFContainer>
    );
};

export default {
    title: 'Table/Wrapping',
    component: Table,
};
