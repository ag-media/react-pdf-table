import React, {useMemo} from 'react';

import {TD, TH, TR, Table} from '../src';

import {generateRandomData} from './common';
import PDFContainer from './components/PDFContainer';

export const Weightings = () => {
    const data = useMemo(() => generateRandomData(15), []);

    return (
        <PDFContainer title="Weightings">
            <Table tdStyle={{padding: '2px'}} weightings={[0.15, 0.15, 0.2, 0.3, 0.2]}>
                <TH style={{fontSize: 14}}>
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
    title: 'Table/Weightings',
    component: Table,
};
