import Navbar from './Navbar'

export default function Layout({ children }) {
    return (
        <>
            <div className='max-w-3xl mx-auto p-4'>
                <Navbar />
                <main className='mt-8'>{children}</main>
            </div>

        </>
    )
}