import React, {useMemo} from 'react';

import {TD, TH, TR, Table} from '../../src';
import {generateRandomData} from '../common';
import PDFContainer from '../components/PDFContainer';

export const Inner = () => {
    const data = useMemo(() => generateRandomData(20), []);

    return (
        <PDFContainer title="Inner borders">
            <Table style={{border: '2px solid green'}} tdStyle={{padding: '2px'}}>
                <TH style={{fontSize: 14}}>
                    <TD style={{borderLeft: 0, borderTop: 0}}>First Name</TD>
                    <TD style={{borderTop: 0}}>Last Name</TD>
                    <TD style={{borderTop: 0}}>DOB</TD>
                    <TD style={{borderTop: 0}}>Country</TD>
                    <TD style={{borderRight: 0, borderTop: 0}}>Phone Number</TD>
                </TH>
                {data.map((human, index) => (
                    <TR key={index}>
                        <TD style={{borderLeft: 0, borderBottom: index === data.length - 1 ? 0 : undefined}}>{human.firstName}</TD>
                        <TD style={{borderBottom: index === data.length - 1 ? 0 : undefined}}>{human.lastName}</TD>
                        <TD style={{borderBottom: index === data.length - 1 ? 0 : undefined}}>{human.dob.toLocaleString()}</TD>
                        <TD style={{borderBottom: index === data.length - 1 ? 0 : undefined}}>{human.country}</TD>
                        <TD style={{borderRight: 0, borderBottom: index === data.length - 1 ? 0 : undefined}}>{human.phoneNumber}</TD>
                    </TR>
                ))}
            </Table>
        </PDFContainer>
    );
};

export default {
    title: 'Border Style/Inner',
    component: Table,
};
