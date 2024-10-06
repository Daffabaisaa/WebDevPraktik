import pandas as pd
import mysql.connector

# Koneksi ke database
db = mysql.connector.connect(
    host="localhost",  # Ganti dengan host MySQL Anda
    user="root",       # Ganti dengan username MySQL Anda
    password="",       # Ganti dengan password MySQL Anda
    database="putar_putar_film"  # Ganti dengan nama database Anda
)

cursor = db.cursor()

# Membaca file Excel
file_path = 'env/Dataset.xlsx'  # Ganti dengan path file Excel Anda
df = pd.read_excel(file_path)

# Looping melalui setiap baris
for index, row in df.iterrows():
    film_id = row['film_id']   # Kolom film_id dari Excel
    genres = row['Genres (Up to 5)']  # Kolom genre yang dipisahkan dengan koma
    
    # Pastikan kolom 'Genres (Up to 5)' tidak kosong
    if pd.notna(genres):
        # Memisahkan genre berdasarkan tanda koma
        genre_list = [genre.strip() for genre in genres.split(',')]
        
        # Memasukkan genre satu per satu ke tabel film_genre
        for genre in genre_list:
            # Memeriksa apakah genre sudah ada di tabel tb_genre, jika tidak maka tambahkan
            cursor.execute("SELECT genre_name FROM tb_genre WHERE genre_name = %s", (genre,))
            result = cursor.fetchone()
            if result is None:
                cursor.execute("INSERT INTO tb_genre (genre_name) VALUES (%s)", (genre,))
                db.commit()

            # Memasukkan ke tabel film_genre
            cursor.execute("INSERT INTO film_genre (film_id, genre_name) VALUES (%s, %s)", (film_id, genre))

# Commit semua perubahan
db.commit()

# Menutup koneksi
cursor.close()
db.close()

print("Data genre berhasil dimasukkan ke tabel film_genre!")
