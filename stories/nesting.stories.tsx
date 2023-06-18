import {Text} from '@react-pdf/renderer';
import React, {useMemo} from 'react';

import {TD, TH, TR, Table} from '../src';

import {generateRandomData} from './common';
import PDFContainer, {play} from './components/PDFContainer';

export const Nesting = () => {
    const data = useMemo(() => generateRandomData(40), []);

    return (
        <PDFContainer title="Nesting">
            <Table tdStyle={{padding: '2px'}} weightings={[0.2, 0.2, 0.1, 0.1, 0.1, 0.3]}>
                <TH fixed style={{fontSize: 14}}>
                    <TD weighting={0.2}>First Name</TD>
                    <TD weighting={0.2}>Last Name</TD>
                    <TD style={{justifyContent: 'center', padding: '2px 9px 2px 10px'}} weighting={0.6}>Characteristics</TD>
                </TH>
                <TH fixed>
                    <TD />
                    <TD />
                    <TD style={{justifyContent: 'center'}}>Gender</TD>
                    <TD style={{justifyContent: 'flex-end'}}>Age</TD>
                    <TD style={{justifyContent: 'flex-end'}}>Height</TD>
                    <TD style={{justifyContent: 'center'}}>Country</TD>
                </TH>
                {data.map((human, index) => (
                    <TR key={index}>
                        <TD>{human.firstName}</TD>
                        <TD>{human.lastName}</TD>
                        <TD>{human.gender}</TD>
                        <TD style={{justifyContent: 'flex-end'}}>{human.age}</TD>
                        <TD style={{justifyContent: 'flex-end'}}>{human.height}m</TD>
                        <TD style={{justifyContent: 'center', textAlign: 'center'}}>{human.country}</TD>
                    </TR>
                ))}
                <TR>
                    <TD />
                    <TD />
                    <TD style={{flexDirection: 'column', padding: '4px 9px 4px 10px'}} weighting={0.6}>
                        <Text style={{marginBottom: 4}}>Child table</Text>
                        <Table tdStyle={{padding: '2px'}}>
                            <TH>
                                <TD>Col 1</TD>
                                <TD>Col 2</TD>
                                <TD>Col 3</TD>
                            </TH>
                            <TR>
                                <TD>Row 1</TD>
                                <TD>Row 1</TD>
                                <TD>Row 1</TD>
                            </TR>
                            <TR>
                                <TD style={{justifyContent: 'center'}} weighting={1}>Row 2</TD>
                            </TR>
                        </Table>
                    </TD>
                </TR>
            </Table>
        </PDFContainer>
    );
};

export default {
    title: 'Table/Nesting',
    component: Table,
    play,
};
