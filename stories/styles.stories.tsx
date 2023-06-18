import React, {useMemo} from 'react';

import {TD, TH, TR, Table} from '../src';

import {generateRandomData} from './common';
import PDFContainer, {play} from './components/PDFContainer';

export const Styles = () => {
    const data = useMemo(() => generateRandomData(10), []);

    return (
        <PDFContainer title="Column Styles">
            <Table tdStyle={{padding: '2px'}}>
                <TH style={{fontSize: 14}}>
                    <TD>First Name</TD>
                    <TD>Last Name</TD>
                    <TD style={{justifyContent: 'center'}}>DOB</TD>
                    <TD style={{padding: '12px'}}>Country</TD>
                    <TD style={{justifyContent: 'flex-end'}}>Phone Number</TD>
                </TH>
                {data.map((human, index) => (
                    <TR
                        key={index}
                        style={{
                            backgroundColor: index % 2 === 0 ? '#ddd' : undefined,
                        }}
                    >
                        <TD>{human.firstName}</TD>
                        <TD>{human.lastName}</TD>
                        <TD style={{justifyContent: 'center'}}>{human.dob.toLocaleString()}</TD>
                        <TD style={{padding: '12px'}}>{human.country}</TD>
                        <TD style={{justifyContent: 'flex-end'}}>{human.phoneNumber}</TD>
                    </TR>
                ))}
            </Table>
        </PDFContainer>
    );
};

export default {
    title: 'Table/Styles',
    component: Table,
    play,
};
