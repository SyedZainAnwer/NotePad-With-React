export interface INote {
    description: string,
    title: string,
    _id: string,
    status: 'archive' | 'trash' | 'note',
}

