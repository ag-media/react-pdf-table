import React from 'react';

import TableRow, {TableRowProps} from './TableRow';

export type TableHeaderProps = TableRowProps;

export default function TableHeader({children, style, ...rest}: TableHeaderProps) {
    return (
        <TableRow
            {...rest}
            style={[
                {
                    fontWeight: 'bold',
                },
                ...(Array.isArray(style) ? style : [style]),
            ]}
        >
            {children}
        </TableRow>
    );
}
