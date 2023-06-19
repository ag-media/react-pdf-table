import {Document, Page, Text, View, pdf} from '@react-pdf/renderer';
import {PageProps} from '@react-pdf/types';
import {expect} from '@storybook/jest';
import {waitFor, within} from '@storybook/testing-library';
import React, {useEffect, useMemo, useRef, useState} from 'react';
import {Document as RenderDocument, Page as RenderPage, pdfjs} from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import {useSize} from '../common';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export async function play({canvasElement}) {
    const canvas = within(canvasElement);
    await waitFor(() => {
        expect(canvas.getByTestId('rendered')).toBeInTheDocument();
    }, {
        timeout: 3000,
    });
}

export default function PDFContainer({
    children,
    title,
    orientation,
    size,
}: {
    orientation?: PageProps['orientation'],
    size?: PageProps['size'],
    title?: string,
    children: React.ReactNode,
}) {
    const [pdfBlob, setPDFBlob] = useState<Blob>();
    const blobURL = useMemo(() => pdfBlob ? URL.createObjectURL(pdfBlob) : '', [pdfBlob]);
    const [numPages, setNumPages] = useState(1);

    useEffect(() => {
        (async () => {
            const blob = await pdf(
                <Document>
                    <Page
                        orientation={orientation || 'landscape'}
                        size={size || 'A4'}
                        style={{
                            fontSize: '12px',
                            margin: '40px',
                            paddingRight: '80px',
                            paddingBottom: '80px',
                        }}
                    >
                        <View>
                            {title ? (
                                <Text
                                    style={{
                                        fontSize: 18,
                                        marginBottom: 16,
                                        textAlign: 'center',
                                    }}
                                >{title}</Text>
                            ) : null}
                            {children}
                        </View>
                    </Page>
                </Document>,
            ).toBlob();

            setPDFBlob(blob);
        })();
    }, [children]);

    const widthRef = useRef<HTMLDivElement>(null);
    const width = useSize(widthRef, 'width');

    if (!pdfBlob || !width) {
        return (
            <div key="wrapper" ref={widthRef} style={{width: '100%'}}>
                Loading...
            </div>
        );
    }

    return (
        <div key="wrapper" ref={widthRef} data-testid="rendered" style={{width: '100%'}}>
            {blobURL ? (
                <a
                    href={blobURL}
                    rel="noreferrer"
                    style={{display: 'block', textAlign: 'right'}}
                    target="_blank"
                >Download PDF</a>
            ) : null}
            <RenderDocument
                file={pdfBlob}
                loading={null}
                onLoadSuccess={(resolvedPDF) => {
                    setNumPages(resolvedPDF.numPages);
                }}
            >
                {Array.from({length: numPages}).map((_, page) => (
                    <RenderPage
                        key={page}
                        pageNumber={page + 1}
                        width={width - 64}
                    />
                ))}
            </RenderDocument>
        </div>
    );
}
