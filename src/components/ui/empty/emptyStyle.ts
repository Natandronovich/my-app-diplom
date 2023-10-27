interface EmptyStyleType {
    [key: string] : React.CSSProperties;
};

export const emptyStyle: EmptyStyleType = {
    emptyContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '30px',
    },
    emptyText:{
        fontSize: '30px',
    },
}

