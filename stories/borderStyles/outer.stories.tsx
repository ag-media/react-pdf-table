import React, {useMemo} from 'react';

import {TD, TH, TR, Table} from '../../src';
import {generateRandomData} from '../common';
import PDFContainer, {play} from '../components/PDFContainer';

export const Outer = () => {
    const data = useMemo(() => generateRandomData(20), []);

    const borderStyle = '2px solid green';

    return (
        <PDFContainer title="Outer borders">
            <Table style={{border: borderStyle}} tdStyle={{padding: '2px'}}>
                <TH style={{fontSize: 14}}>
                    <TD style={{borderTop: borderStyle, borderRight: 0, borderBottom: 0, borderLeft: borderStyle}}>First Name</TD>
                    <TD style={{borderTop: borderStyle, borderRight: 0, borderBottom: 0, borderLeft: 0}}>Last Name</TD>
                    <TD style={{borderTop: borderStyle, borderRight: 0, borderBottom: 0, borderLeft: 0}}>DOB</TD>
                    <TD style={{borderTop: borderStyle, borderRight: 0, borderBottom: 0, borderLeft: 0}}>Country</TD>
                    <TD style={{borderTop: borderStyle, borderRight: borderStyle, borderBottom: 0, borderLeft: 0}}>Phone Number</TD>
                </TH>
                {data.map((human, index) => (
                    <TR key={index}>
                        <TD style={{borderTop: 0, borderRight: 0, borderBottom: index === data.length - 1 ? borderStyle : 0, borderLeft: borderStyle}}>{human.firstName}</TD>
                        <TD style={{borderTop: 0, borderRight: 0, borderBottom: index === data.length - 1 ? borderStyle : 0, borderLeft: 0}}>{human.lastName}</TD>
                        <TD style={{borderTop: 0, borderRight: 0, borderBottom: index === data.length - 1 ? borderStyle : 0, borderLeft: 0}}>{human.dob.toLocaleString()}</TD>
                        <TD style={{borderTop: 0, borderRight: 0, borderBottom: index === data.length - 1 ? borderStyle : 0, borderLeft: 0}}>{human.country}</TD>
                        <TD style={{borderTop: 0, borderRight: borderStyle, borderBottom: index === data.length - 1 ? borderStyle : 0, borderLeft: 0}}>{human.phoneNumber}</TD>
                    </TR>
                ))}
            </Table>
        </PDFContainer>
    );
};

export default {
    title: 'Border Style/Outer',
    component: Table,
    play,
};
