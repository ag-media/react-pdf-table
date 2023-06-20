import React, {useMemo} from 'react';

import {TD, TH, TR, Table} from '../../src';
import {generateRandomData} from '../common';
import PDFContainer, {play} from '../components/PDFContainer';

export const RowLines = () => {
    const data = useMemo(() => generateRandomData(20), []);

    return (
        <PDFContainer title="Rowlines borders">
            <Table style={{border: '2px solid green'}} tdStyle={{padding: '2px'}}>
                <TH style={{fontSize: 14}}>
                    <TD style={{borderTop: 0, borderRight: 0, borderLeft: 0}}>First Name</TD>
                    <TD style={{borderTop: 0, borderRight: 0, borderLeft: 0}}>Last Name</TD>
                    <TD style={{borderTop: 0, borderRight: 0, borderLeft: 0}}>DOB</TD>
                    <TD style={{borderTop: 0, borderRight: 0, borderLeft: 0}}>Country</TD>
                    <TD style={{borderTop: 0, borderRight: 0, borderLeft: 0}}>Phone Number</TD>
                </TH>
                {data.map((human, index) => (
                    <TR key={index}>
                        <TD style={{borderRight: 0, borderBottom: index === data.length - 1 ? 0 : undefined, borderLeft: 0}}>{human.firstName}</TD>
                        <TD style={{borderRight: 0, borderBottom: index === data.length - 1 ? 0 : undefined, borderLeft: 0}}>{human.lastName}</TD>
                        <TD style={{borderRight: 0, borderBottom: index === data.length - 1 ? 0 : undefined, borderLeft: 0}}>{human.dob.toLocaleString()}</TD>
                        <TD style={{borderRight: 0, borderBottom: index === data.length - 1 ? 0 : undefined, borderLeft: 0}}>{human.country}</TD>
                        <TD style={{borderRight: 0, borderBottom: index === data.length - 1 ? 0 : undefined, borderLeft: 0}}>{human.phoneNumber}</TD>
                    </TR>
                ))}
            </Table>
        </PDFContainer>
    );
};

export default {
    title: 'Border Style/Row lines',
    component: Table,
    play,
};
