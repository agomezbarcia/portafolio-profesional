import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Abraham Gómez Barcia | Full Stack Developer';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(to bottom right, #0f172a, #1e293b)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '20px',
                    }}
                >
                    {/* Círculo con iniciales */}
                    <div
                        style={{
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            background: 'linear-gradient(to right, #2563eb, #9333ea)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '40px',
                            color: 'white',
                            fontWeight: 'bold',
                        }}
                    >
                        AG
                    </div>
                </div>

                <div
                    style={{
                        fontSize: '60px',
                        fontWeight: 'bold',
                        color: 'white',
                        marginBottom: '10px',
                        textAlign: 'center',
                    }}
                >
                    ABRAHAM GÓMEZ BARCIA
                </div>

                <div
                    style={{
                        fontSize: '30px',
                        color: '#94a3b8',
                        textAlign: 'center',
                        background: '#1e293b',
                        padding: '10px 30px',
                        borderRadius: '20px',
                        border: '1px solid #334155',
                    }}
                >
                    Desarrollador Full Stack
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}