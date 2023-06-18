import {View} from '@react-pdf/renderer';
import React, {useContext, useMemo} from 'react';

import {tableContext} from './Table';

export interface TableRowProps extends Omit<React.ComponentProps<typeof View>, 'children'> {
    _firstRow?: boolean,
    _lastRow?: boolean,

    children?: React.ReactElement | React.ReactElement[] | React.ReactFragment | React.ReactFragment[],
}

export default function TableRow({children, style: styleProps, _firstRow, _lastRow, ...rest}: TableRowProps) {
    const {trStyle, weightings: tableWeightings} = useContext(tableContext);

    const cells = useMemo(() => {
        const output: React.ReactElement[] = [];

        const flattenChildren = (elem: typeof children) => {
            React.Children.forEach(elem, (child) => {
                if (!React.isValidElement(child)) {
                    return;
                }

                if (child.type === React.Fragment) {
                    flattenChildren((child.props as {children?: React.ReactNode}).children);
                }
                else {
                    output.push(child);
                }
            });
        };
        flattenChildren(children);

        let weightings: (number | undefined)[] = [];

        for (const [index, row] of output.entries()) {
            if (row.props?.weighting) {
                weightings.push(row.props?.weighting);
            }
            else {
                weightings.push(tableWeightings?.[index]);
            }
        }

        const remainingWeighting = 1 - weightings.reduce((acc, val) => acc + (val || 0), 0);
        const weightingPerNotSpecified = remainingWeighting / (output.length - weightings.filter(e => typeof e === 'number').length);

        weightings = weightings.map(e => e === undefined ? weightingPerNotSpecified : e);

        return (
            output.map((td, columnIndex) => (
                React.cloneElement(td, {
                    weighting: weightings[columnIndex],
                    key: `table_col_${columnIndex}_cell`,
                    _firstColumn: columnIndex === 0,
                    _lastColumn: columnIndex === output.length - 1,
                    _firstRow,
                    _lastRow,
                })
            ))
        );
    }, [children, tableWeightings, _firstRow, _lastRow]);

    return (
        <View
            {...rest}
            style={[
                {
                    display: 'flex',
                    flexDirection: 'row',
                },
                ...(Array.isArray(trStyle) ? trStyle : [trStyle]),
                ...(Array.isArray(styleProps) ? styleProps : [styleProps]),
            ]}
        >
            {cells}
        </View>
    );
}
