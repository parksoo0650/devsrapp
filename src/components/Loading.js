import { TailSpin } from 'react-loader-spinner';

export default function Loading() {
    return (
        <div className="loadingBox">
            <TailSpin
                heigth="100"
                width="100"
                color='grey'
                ariaLabel='loading'
            />
            <style jsx>{`
                .loadingBox {
                    display: flex;
                    justify-content: center;
	                align-items: center;
                }
            `}</style>
        </div>
    );
}