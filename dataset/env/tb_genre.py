import pandas as pd
import mysql.connector

# Koneksi ke database
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="putar_putar_film"
)

cursor = db.cursor()

# Membaca file Excel
file_path = 'env/Dataset.xlsx'  # Ganti dengan path file Excel Anda
df = pd.read_excel(file_path)

# Looping melalui setiap baris di kolom Genres (Up to 5)
for index, row in df.iterrows():
    genres = row['Genres (Up to 5)']
    
    # Pastikan cell tidak kosong sebelum diproses
    if pd.notna(genres):
        # Pisahkan genre berdasarkan koma dan hapus spasi ekstra
        genre_list = [genre.strip() for genre in genres.split(',')]
        
        for genre in genre_list:
            # Cek apakah genre sudah ada di tabel tb_genre
            cursor.execute("SELECT genre_name FROM tb_genre WHERE genre_name = %s", (genre,))
            result = cursor.fetchone()

            if not result:
                # Jika genre belum ada, tambahkan ke tabel tb_genre
                cursor.execute("INSERT INTO tb_genre (genre_name) VALUES (%s)", (genre,))
                print(f"Inserted new genre: {genre}")
            else:
                print(f"Genre {genre} already exists, skipping.")

# Commit perubahan dan tutup koneksi
db.commit()
cursor.close()
db.close()

print("Proses selesai!")
