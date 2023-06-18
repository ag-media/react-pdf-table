import React, {useMemo} from 'react';

import {TD, TH, TR, Table} from '../../src';
import {generateRandomData} from '../common';
import PDFContainer from '../components/PDFContainer';

export const Full = () => {
    const data = useMemo(() => generateRandomData(20), []);

    return (
        <PDFContainer title="Full borders">
            <Table
                style={{border: '2px solid green'}}
                tdStyle={{padding: '2px'}}
            >
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
    title: 'Border Style/Full',
    component: Table,
};
