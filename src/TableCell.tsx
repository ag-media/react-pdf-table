import {Text, View} from '@react-pdf/renderer';
import React, {useContext, useMemo} from 'react';

import {tableContext} from './Table';

export interface TableCellProps extends Omit<React.ComponentProps<typeof View>, 'children'> {
    /**
     * The weighting of a cell based on the flex layout style.
     * This value is between 0..1, if not specified 1 is assumed, this will take up the remaining available space.
     */
    weighting?: number,

    _firstColumn?: boolean,
    _lastColumn?: boolean,
    _firstRow?: boolean,
    _lastRow?: boolean,

    children?: React.ReactNode | React.ReactNode[],
}

export default function TableCell({
    children, weighting,
    _firstColumn, _lastColumn,
    _firstRow, _lastRow,
    ...rest
}: TableCellProps) {
    const content = useMemo(() => {
        const output: JSX.Element[] = [];

        const flattenChildren = (elem: typeof children) => {
            React.Children.forEach(elem, (child) => {
                if (child?.type === React.Fragment) {
                    flattenChildren((child.props as {children?: React.ReactNode}).children);
                }
                else {
                    output.push(child);
                }
            });
        };
        flattenChildren(children);

        return (
            output.map((child, index) => {
                const key = `table_cell_${index}_content`;

                if (typeof child === 'string' || typeof child === 'number') {
                    return (
                        <Text key={key}>{child}</Text>
                    );
                }
                else {
                    return child;
                }
            })
        );
    }, [children]);

    const {tdStyle, style: tableStyle} = useContext(tableContext);
    const borderMargin = `${(tableStyle['borderWidth'] || 0) * -1}px`;

    // all this fuckery is to ensure no micro-gaps in the solid borders (1000x zoom to see)
    const borders = useMemo(() => {
        if (tableStyle.borderStyle === 'solid') {
            return {
                borderTop: `${tableStyle['borderWidth'] || 0}px ${tableStyle.borderStyle} ${tableStyle.borderColor}`,
                borderRight: `${tableStyle['borderWidth'] || 0}px ${tableStyle.borderStyle} ${tableStyle.borderColor}`,
                borderBottom: `${tableStyle['borderWidth'] || 0}px ${tableStyle.borderStyle} ${tableStyle.borderColor}`,
                borderLeft: `${tableStyle['borderWidth'] || 0}px ${tableStyle.borderStyle} ${tableStyle.borderColor}`,
                margin: `${borderMargin} ${_lastColumn ? borderMargin : '0'} ${_lastRow ? borderMargin : 0} ${borderMargin}`,
            };
        }
        else {
            return {
                borderTop: _firstRow ? undefined : `${tableStyle['borderWidth'] || 0}px ${tableStyle.borderStyle} ${tableStyle.borderColor}`,
                borderLeft: _firstColumn ? undefined : `${tableStyle['borderWidth'] || 0}px ${tableStyle.borderStyle} ${tableStyle.borderColor}`,
            };
        }
    }, [tableStyle, _firstColumn, _lastColumn, _firstRow, _firstRow]);

    return (
        <View
            wrap={true}
            {...rest}
            style={[
                {
                    ...borders,
                    flex: weighting ?? 1,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                },
                ...(Array.isArray(tdStyle) ? tdStyle : [tdStyle]),
                ...(Array.isArray(rest.style) ? rest.style : [rest.style]),
            ]}
        >
            {content}
        </View>
    );
}
