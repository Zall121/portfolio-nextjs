export const projects = [
    // Web Projects
    {
        id: 1,
        title: 'Portfolio Website',
        description: 'Website portfolio pribadi dengan animasi 3D dan desain modern.',
        category: 'Web',
        thumbnail: '/projects/web/portfolio/thumb.png',
        images: [
            '/projects/web/portfolio/1.png',
            '/projects/web/portfolio/2.png',
            '/projects/web/portfolio/3.png',
        ],
        tags: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
        featured: true
    },
    {
        id: 2,
        title: 'Perpusku.com',
        description: 'Web Peminjaman Buku Online',
        category: 'Web',
        thumbnail: '/projects/web/perpusku/thumb.png',
        images: [
            '/projects/web/perpusku/1.png',
            '/projects/web/perpusku/2.png',
            '/projects/web/perpusku/3.png',
            '/projects/web/perpusku/4.png',
            '/projects/web/perpusku/5.png',
            '/projects/web/perpusku/6.png',
            '/projects/web/perpusku/7.png',
            '/projects/web/perpusku/8.png',
            '/projects/web/perpusku/9.png',
            '/projects/web/perpusku/10.png',
        ],
        tags: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'Filament'],
        featured: false
    },
    {
        id: 3,
        title: 'VisitMadura',
        description: 'Web Wisata Pulau Madura',
        category: 'Web',
        thumbnail: '/projects/web/wisata/thumb.png',
        images: [
            '/projects/web/wisata/1.png',
            '/projects/web/wisata/2.png',
            '/projects/web/wisata/3.png',
        ],
        tags: ['HTML', 'CSS', 'Bootstap'],
        featured: false
    },
    // Android Projects
    {
        id: 4,
        title: 'Aplikasi KursusApp',
        description: 'Aplikasi mobile untuk platform pembelajaran online.',
        category: 'Android',
        thumbnail: '/projects/android/kursus/thumb.png',
        images: [
            '/projects/android/kursus/0.jpg',
            '/projects/android/kursus/1.jpg',
            '/projects/android/kursus/2.jpg',
            '/projects/android/kursus/3.jpg',
            '/projects/android/kursus/4.jpg',
            '/projects/android/kursus/5.png',
            '/projects/android/kursus/6.png',
            '/projects/android/kursus/7.png',
            '/projects/android/kursus/8.png',
            '/projects/android/kursus/9.png',
        ],
        tags: ['Laravel', 'Filament', 'Android Studio', 'Retrofit', 'Material Design 3',],
        featured: true
    },
    {
        id: 5,
        title: 'Aplikasi JadwalKu.',
        description: 'Aplikasi jadwal mata kuliah sederhana untuk kebutuhan mahasiswa',
        category: 'Android',
        thumbnail: '/projects/android/jadwalku/thumb.png',
        images: [
            '/projects/android/jadwalku/1.jpg',
            '/projects/android/jadwalku/2.jpg',
            '/projects/android/jadwalku/3.jpg',
            '/projects/android/jadwalku/4.jpg',
        ],
        tags: ['Java', 'Android Studio Code',],
        featured: false
    },
    // Gallery
    {
        id: 6,
        title: 'Typography',
        description: 'Koleksi foto-foto pribadi saya.',
        category: 'Gallery',
        thumbnail: '/projects/gallery/thumb.png',
        images: [
            '/projects/gallery/1.jpg',
            '/projects/gallery/2.jpg',
            '/projects/gallery/3.jpg',
            '/projects/gallery/4.jpg',
            '/projects/gallery/5.jpg',
        ],
        tags: ['Typography Arsip',],
        featured: false
    }
];

export const categories = ['All', 'Web', 'Android', 'Gallery'];

export default projects;
