import { render, screen, fireEvent } from '@testing-library/react';
import Body from './body';

describe('Body', () => {
    it('should save and display the selected values', () => {
        render(<Body />);

        const nameInput = screen.getByLabelText(/nama/i);
        const descriptionInput = screen.getByLabelText(/deskripsi/i);
        fireEvent.change(nameInput, { target: { value: 'Produk Baru' } });
        fireEvent.change(descriptionInput, { target: { value: 'Deskripsi Produk Baru' } });
        const submitButton = screen.getByRole('button', { name: /tambahkan produk/i });
        fireEvent.click(submitButton);
        const name = screen.getByText(/produk baru/i);
        const description = screen.getByText(/deskripsi produk baru/i);


        expect(name).toBeInTheDocument();
        expect(description).toBeInTheDocument();


    });
});
