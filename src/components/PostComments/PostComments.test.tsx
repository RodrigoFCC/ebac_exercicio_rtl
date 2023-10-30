import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve inserir 2 comentários', () => {
        render(<PostComment/>);

        fireEvent.change(screen.getByTestId('comment-text'), {
            target: {
                value: 'Primeiro Comentário',
            }
        });
        fireEvent.click(screen.getByTestId('comment-button'));
    
        fireEvent.change(screen.getByTestId('comment-text'), {
            target: {
                value: 'Segundo Comentário',
            }
        });
        fireEvent.click(screen.getByTestId('comment-button'));

        expect(screen.getAllByTestId('comment-post')).toHaveLength(2);
    });
});