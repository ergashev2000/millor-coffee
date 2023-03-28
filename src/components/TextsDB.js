
import pic01 from '../images/Blog/pic01.png';
import pic01Webp from '../images/Blog/pic01.webp';
import pic02 from '../images/Blog/pic02.png';
import pic02Webp from '../images/Blog/pic02.webp';
import pic03 from '../images/Blog/pic03.png';
import pic03Webp from '../images/Blog/pic03.webp';
import news01 from '../images/news/01.png';
import news01Webp from '../images/news/01.webp';
import coffee01 from '../images/Discount Goods/01.png';
import coffee01Webp from '../images/Discount Goods/01.webp';
import tea01 from '../images/TeaCatalog/01.png';
import tea01Webp from '../images/TeaCatalog/01.webp';
import tea02 from '../images/TeaCatalog/02.png';
import tea02Webp from '../images/TeaCatalog/02.webp';
import tea03 from '../images/TeaCatalog/03.png';
import tea03Webp from '../images/TeaCatalog/03.webp';
import tea04 from '../images/TeaCatalog/04.png';
import tea04Webp from '../images/TeaCatalog/04.webp';
import tea05 from '../images/TeaCatalog/05.png';
import tea05Webp from '../images/TeaCatalog/05.webp';
import tea06 from '../images/TeaCatalog/06.png';
import tea06Webp from '../images/TeaCatalog/06.webp';
import tea07 from '../images/TeaCatalog/07.png';
import tea07Webp from '../images/TeaCatalog/07.webp';
import wending01 from '../images/Wending Products/Rectangle 61.png';
import wending01Webp from '../images/Wending Products/Rectangle 61.webp';
import healthyDiet01 from '../images/HealthyDiet/01.png';
import healthyDiet01Webp from '../images/HealthyDiet/01.webp';
import ava from '../images/Coffee/ava.png';
import avaWebp from '../images/Coffee/ava.webp';
import rating from '../images/Discount Goods/stars.png';
import ratingWebp from '../images/Discount Goods/stars.webp';

export const allProducts = [
  //coffee
  {
    product: 'coffee',                       //продукт
    cookingMethod: 'Турка',                  //способ приготовления 1
    methodProcessing: 'Сухая',               //способ обработки 5
    degreeFrying: 4,                         //степень обжарки 2
    geography: 'Африка',                     //география 3
    typeCoffee: 'Робуста',                   //вид кофе 7
    sale: false,                             //скидки
    special: ['Популярное', 'Новый урожай'], //особые 6
    rating: 4,                               //рейтинг
    acid: 'Низкая',                          //кислинка 4
    image: coffee01,                         //картинка png
    imageWebp: coffee01Webp,                 //картинка webp
    title: 'Colombia Supremo',               //заголовок
    description: ['Свежеобжаренный кофе',    //описание
      '- описание товара, вкус, аромат'],
    price: 1,                                //цена за один грамм продукта
    discount: 0.1,                           //скидка
    amount: 1,                               //кол-во товара, по умолчанию 1
    review: [                                //отзывы    
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'coffee',
    cookingMethod: 'Френч-пресс',
    methodProcessing: 'Мытая',
    degreeFrying: 5,
    geography: 'Йемен',
    typeCoffee: 'Смесь арабик',
    sale: false,
    special: ['Ваш выбор'],
    rating: 5,
    acid: 'Средняя',
    image: coffee01,
    imageWebp: coffee01Webp,
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: 1,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'coffee',
    cookingMethod: 'Мока',
    methodProcessing: 'Прочие',
    degreeFrying: 3,
    geography: 'Уганда',
    typeCoffee: 'Смесь арабика/робуста',
    sale: true,
    special: ['Скидки'],
    rating: 3,
    acid: 'Высокая',
    image: coffee01,
    imageWebp: coffee01Webp,
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: 1,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'coffee',
    cookingMethod: 'Эспрессо',
    methodProcessing: 'Сухая',
    degreeFrying: 5,
    geography: 'Эфиопия',
    typeCoffee: 'Арабика',
    sale: false,
    special: ['Сорт недели'],
    rating: 4,
    acid: 'Низкая',
    image: coffee01,
    imageWebp: coffee01Webp,
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: 1,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'coffee',
    cookingMethod: 'Воронка',
    methodProcessing: 'Мытая',
    degreeFrying: 5,
    geography: 'Азия',
    typeCoffee: 'Робуста',
    sale: false,
    special: ['Микролот'],
    rating: 4,
    acid: 'Средняя',
    image: coffee01,
    imageWebp: coffee01Webp,
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: 1,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'coffee',
    cookingMethod: 'Аэропресс',
    methodProcessing: 'Прочие',
    degreeFrying: 5,
    geography: 'Центр. Америка',
    typeCoffee: 'Смесь арабик',
    sale: false,
    special: ['Новинка'],
    rating: 4,
    acid: 'Высокая',
    image: coffee01,
    imageWebp: coffee01Webp,
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: 1,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'coffee',
    cookingMethod: 'Чашка',
    methodProcessing: 'Сухая',
    degreeFrying: 4,
    geography: 'Лат. Америка',
    typeCoffee: 'Смесь арабика/робуста',
    sale: false,
    special: ['Популярное', 'Новый урожай'],
    rating: 4,
    acid: 'Низкая',
    image: coffee01,
    imageWebp: coffee01Webp,
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: 1,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'coffee',
    cookingMethod: 'Автомат',
    methodProcessing: 'Мытая',
    degreeFrying: 4,
    geography: 'Африка',
    typeCoffee: 'Робуста',
    sale: false,
    special: ['Ваш выбор'],
    rating: 4,
    acid: 'Средняя',
    image: coffee01,
    imageWebp: coffee01Webp,
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: 1,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'coffee',
    cookingMethod: 'Турка',
    methodProcessing: 'Прочие',
    degreeFrying: 4,
    geography: 'Йемен',
    typeCoffee: 'Смесь арабик',
    sale: false,
    special: ['Сорт недели'],
    rating: 4,
    acid: 'Высокая',
    image: coffee01,
    imageWebp: coffee01Webp,
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: 1,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'coffee',
    cookingMethod: 'Френч-пресс',
    methodProcessing: 'Сухая',
    degreeFrying: 4,
    geography: 'Уганда',
    typeCoffee: 'Смесь арабика/робуста',
    sale: false,
    special: ['Микролот'],
    rating: 4,
    acid: 'Низкая',
    image: coffee01,
    imageWebp: coffee01Webp,
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: 1,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'coffee',
    cookingMethod: 'Мока',
    methodProcessing: 'Мытая',
    degreeFrying: 4,
    geography: 'Эфиопия',
    typeCoffee: 'Арабика',
    sale: false,
    special: ['Новинка'],
    rating: 4,
    acid: 'Средняя',
    image: coffee01,
    imageWebp: coffee01Webp,
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: 1,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'coffee',
    cookingMethod: 'Эспрессо',
    methodProcessing: 'Прочие',
    degreeFrying: 4,
    geography: 'Азия',
    typeCoffee: 'Робуста',
    sale: false,
    special: ['Популярное', 'Новый урожай'],
    rating: 4,
    acid: 'Высокая',
    image: coffee01,
    imageWebp: coffee01Webp,
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: 1,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  //===================== 12 штук
  {
    product: 'coffee',
    cookingMethod: 'Турка',
    methodProcessing: 'Мытая',
    degreeFrying: 4,
    geography: 'Уганда',
    typeCoffee: 'Арабика',
    sale: false,
    special: ['Ваш выбор'],
    rating: 4,
    acid: 'Средняя',
    image: coffee01,
    imageWebp: coffee01Webp,
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: 1,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'coffee',
    cookingMethod: 'Турка',
    methodProcessing: 'Прочие',
    degreeFrying: 4,
    geography: 'Эфиопия',
    typeCoffee: 'Смесь арабика/робуста',
    sale: false,
    special: ['Микролот'],
    rating: 4,
    acid: 'Высокая',
    image: coffee01,
    imageWebp: coffee01Webp,
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: 1,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'coffee',
    cookingMethod: 'Турка',
    methodProcessing: 'Прочие',
    degreeFrying: 4,
    geography: 'Азия',
    typeCoffee: 'Смесь арабик',
    sale: false,
    special: ['Скидки'],
    rating: 4,
    acid: 'Высокая',
    image: coffee01,
    imageWebp: coffee01Webp,
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: 1,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'coffee',
    cookingMethod: 'Турка',
    methodProcessing: 'Прочие',
    degreeFrying: 4,
    geography: 'Центр. Америка',
    typeCoffee: 'Смесь арабик',
    sale: false,
    special: ['Новинка'],
    rating: 4,
    acid: 'Высокая',
    image: coffee01,
    imageWebp: coffee01Webp,
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: 1,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'coffee',
    cookingMethod: 'Турка',
    methodProcessing: 'Прочие',
    degreeFrying: 4,
    geography: 'Лат. Америка',
    typeCoffee: 'Смесь арабик',
    sale: false,
    special: ['Сорт недели'],
    rating: 4,
    acid: 'Высокая',
    image: coffee01,
    imageWebp: coffee01Webp,
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: 1,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'coffee',
    cookingMethod: 'Френч-пресс',
    methodProcessing: 'Прочие',
    degreeFrying: 4,
    geography: 'Африка',
    typeCoffee: 'Арабика',
    sale: false,
    special: ['Популярное', 'Новый урожай'],
    rating: 4,
    acid: 'Высокая',
    image: coffee01,
    imageWebp: coffee01Webp,
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: 1,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'coffee',
    cookingMethod: 'Френч-пресс',
    methodProcessing: 'Сухая',
    degreeFrying: 4,
    geography: 'Лат. Америка',
    typeCoffee: 'Робуста',
    sale: false,
    special: ['Сорт недели'],
    rating: 4,
    acid: 'Низкая',
    image: coffee01,
    imageWebp: coffee01Webp,
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: 1,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'coffee',
    cookingMethod: 'Френч-пресс',
    methodProcessing: 'Сухая',
    degreeFrying: 4,
    geography: 'Центр. Америка',
    typeCoffee: 'Смесь арабика/робуста',
    sale: true,
    special: ['Скидки'],
    rating: 4,
    acid: 'Низкая',
    image: coffee01,
    imageWebp: coffee01Webp,
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: 1,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'coffee',
    cookingMethod: 'Френч-пресс',
    methodProcessing: 'Сухая',
    degreeFrying: 4,
    geography: 'Центр. Америка',
    typeCoffee: 'Смесь арабика/робуста',
    sale: true,
    special: ['Скидки'],
    rating: 4,
    acid: 'Низкая',
    image: coffee01,
    imageWebp: coffee01Webp,
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: 1,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'coffee',
    cookingMethod: 'Френч-пресс',
    methodProcessing: 'Сухая',
    degreeFrying: 4,
    geography: 'Центр. Америка',
    typeCoffee: 'Смесь арабика/робуста',
    sale: true,
    special: ['Скидки'],
    rating: 4,
    acid: 'Низкая',
    image: coffee01,
    imageWebp: coffee01Webp,
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: 1,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'coffee',
    cookingMethod: 'Френч-пресс',
    methodProcessing: 'Сухая',
    degreeFrying: 4,
    geography: 'Эфиопия',
    typeCoffee: 'Смесь арабика/робуста',
    sale: false,
    special: ['Микролот'],
    rating: 4,
    acid: 'Низкая',
    image: coffee01,
    imageWebp: coffee01Webp,
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: 1,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'coffee',
    cookingMethod: 'Френч-пресс',
    methodProcessing: 'Сухая',
    degreeFrying: 4,
    geography: 'Азия',
    typeCoffee: 'Смесь арабика/робуста',
    sale: false,
    special: ['Микролот'],
    rating: 4,
    acid: 'Низкая',
    image: coffee01,
    imageWebp: coffee01Webp,
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: 1,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'coffee',
    cookingMethod: 'Эспрессо',
    methodProcessing: 'Мытая',
    degreeFrying: 4,
    geography: 'Центр. Америка',
    typeCoffee: 'Смесь арабика/робуста',
    sale: false,
    special: ['Популярное', 'Новый урожай'],
    rating: 4,
    acid: 'Средняя',
    image: coffee01,
    imageWebp: coffee01Webp,
    title: 'Colombia Supremo',
    description: ['Свежеобжаренный кофе', '- описание товара, вкус, аромат'],
    price: 1,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  //tea
  {
    product: 'tea',
    name: 'Черный чай',
    sale: false,
    rating: 4,
    image: tea01,
    imageWebp: tea01Webp,
    title: 'Наименование товара',
    description: ['Черный чай'],
    price: 2.5,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'tea',
    name: 'Зеленый чай',
    sale: false,
    rating: 4,
    image: tea02,
    imageWebp: tea02Webp,
    title: 'Наименование товара',
    description: ['Зеленый чай'],
    price: 2.5,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'tea',
    name: 'Молочный улунг',
    sale: false,
    rating: 4,
    image: tea03,
    imageWebp: tea03Webp,
    title: 'Наименование товара',
    description: ['Молочный улунг'],
    price: 2.5,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'tea',
    name: 'Травяной чай',
    sale: true,
    rating: 4,
    image: tea04,
    imageWebp: tea04Webp,
    title: 'Наименование товара',
    description: ['Травяной чай'],
    price: 2.5,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'tea',
    name: 'Матча',
    sale: false,
    rating: 4,
    image: tea05,
    imageWebp: tea05Webp,
    title: 'Наименование товара',
    description: ['Матча'],
    price: 2.5,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'tea',
    name: 'Пуэр',
    sale: false,
    rating: 4,
    image: tea06,
    imageWebp: tea06Webp,
    title: 'Наименование товара',
    description: ['Пуэр'],
    price: 2.5,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'tea',
    name: 'Кофейные напитки',
    sale: false,
    rating: 4,
    image: tea07,
    imageWebp: tea07Webp,
    title: 'Наименование товара',
    description: ['Кофейные напитки'],
    price: 2.5,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'tea',
    name: 'Черный чай',
    sale: true,
    rating: 4,
    image: tea01,
    imageWebp: tea01Webp,
    title: 'Наименование товара',
    description: ['Черный чай'],
    price: 2.5,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'tea',
    name: 'Зеленый чай',
    sale: false,
    rating: 4,
    image: tea02,
    imageWebp: tea02Webp,
    title: 'Наименование товара',
    description: ['Зеленый чай'],
    price: 2.5,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'tea',
    name: 'Молочный улунг',
    sale: false,
    rating: 4,
    image: tea03,
    imageWebp: tea03Webp,
    title: 'Наименование товара',
    description: ['Молочный улунг'],
    price: 2.5,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'tea',
    name: 'Травяной чай',
    sale: false,
    rating: 4,
    image: tea04,
    imageWebp: tea04Webp,
    title: 'Наименование товара',
    description: ['Травяной чай'],
    price: 2.5,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'tea',
    name: 'Матча',
    sale: true,
    rating: 4,
    image: tea05,
    imageWebp: tea05Webp,
    title: 'Наименование товара',
    description: ['Матча'],
    price: 2.5,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  //===================== 12 штук
  {
    product: 'tea',
    name: 'Пуэр',
    sale: false,
    rating: 4,
    image: tea06,
    imageWebp: tea06Webp,
    title: 'Наименование товара',
    description: ['Пуэр'],
    price: 2.5,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'tea',
    name: 'Кофейные напитки',
    sale: false,
    rating: 4,
    image: tea07,
    imageWebp: tea07Webp,
    title: 'Наименование товара',
    description: ['Кофейные напитки'],
    price: 2.5,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  //Wending Product
  {
    product: 'wending product',
    name: 'Гранулированный кофе',
    sale: false,
    rating: 4,
    image: wending01,
    imageWebp: wending01Webp,
    title: 'Наименование товара',
    description: ['Гранулированный кофе'],
    price: 2.5,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'wending product',
    name: 'Гранулированный цикорий',
    sale: false,
    rating: 4,
    image: wending01,
    imageWebp: wending01Webp,
    title: 'Наименование товара',
    description: ['Гранулированный цикорий'],
    price: 1,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'wending product',
    name: 'Зерновой кофе',
    sale: false,
    rating: 4,
    image: wending01,
    imageWebp: wending01Webp,
    title: 'Наименование товара',
    description: ['Зерновой кофе'],
    price: 1,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'wending product',
    name: 'Гранулированный какао',
    sale: false,
    rating: 4,
    image: wending01,
    imageWebp: wending01Webp,
    title: 'Наименование товара',
    description: ['Гранулированный какао'],
    price: 1,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'wending product',
    name: 'Гранулированные кофейные напитки',
    sale: false,
    rating: 4,
    image: wending01,
    imageWebp: wending01Webp,
    title: 'Наименование товара',
    description: ['Гранулированные кофейные напитки'],
    price: 1,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'wending product',
    name: 'Кофе порошкообразный',
    sale: false,
    rating: 4,
    image: wending01,
    imageWebp: wending01Webp,
    title: 'Наименование товара',
    description: ['Кофе порошкообразный'],
    price: 1,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'wending product',
    name: 'Сухое молоко гранулированное',
    sale: false,
    rating: 4,
    image: wending01,
    imageWebp: wending01Webp,
    title: 'Наименование товара',
    description: ['Сухое молоко гранулированное'],
    price: 1,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'wending product',
    name: 'Гранулированный кофе',
    sale: false,
    rating: 4,
    image: wending01,
    imageWebp: wending01Webp,
    title: 'Наименование товара',
    description: ['Гранулированный кофе'],
    price: 1,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'wending product',
    name: 'Гранулированный цикорий',
    sale: false,
    rating: 4,
    image: wending01,
    imageWebp: wending01Webp,
    title: 'Наименование товара',
    description: ['Гранулированный цикорий'],
    price: 1,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'wending product',
    name: 'Зерновой кофе',
    sale: false,
    rating: 4,
    image: wending01,
    imageWebp: wending01Webp,
    title: 'Наименование товара',
    description: ['Зерновой кофе'],
    price: 1,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'wending product',
    name: 'Гранулированный какао',
    sale: false,
    rating: 4,
    image: wending01,
    imageWebp: wending01Webp,
    title: 'Наименование товара',
    description: ['Гранулированный какао'],
    price: 1,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'wending product',
    name: 'Гранулированные кофейные напитки',
    sale: false,
    rating: 4,
    image: wending01,
    imageWebp: wending01Webp,
    title: 'Наименование товара',
    description: ['Гранулированные кофейные напитки'],
    price: 1,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  //=======================  12
  {
    product: 'wending product',
    name: 'Кофе порошкообразный',
    sale: false,
    rating: 4,
    image: wending01,
    imageWebp: wending01Webp,
    title: 'Наименование товара',
    description: ['Кофе порошкообразный'],
    price: 1,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'wending product',
    name: 'Сухое молоко гранулированное',
    sale: false,
    rating: 4,
    image: wending01,
    imageWebp: wending01Webp,
    title: 'Наименование товара',
    description: ['Сухое молоко гранулированное'],
    price: 1,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'wending product',
    name: 'Сухое молоко гранулированное',
    sale: false,
    rating: 4,
    image: wending01,
    imageWebp: wending01Webp,
    title: 'Наименование товара',
    description: ['Сухое молоко гранулированное'],
    price: 1,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'wending product',
    name: 'Гранулированный кофе',
    sale: false,
    rating: 4,
    image: wending01,
    imageWebp: wending01Webp,
    title: 'Наименование товара',
    description: ['Гранулированный кофе'],
    price: 1,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'wending product',
    name: 'Гранулированный цикорий',
    sale: false,
    rating: 4,
    image: wending01,
    imageWebp: wending01Webp,
    title: 'Наименование товара',
    description: ['Гранулированный цикорий'],
    price: 1,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  //Healthy Diet
  {
    product: 'healthy diet',
    name: 'Цикорий и корень цикория',
    sale: false,
    rating: 4,
    image: healthyDiet01,
    imageWebp: healthyDiet01Webp,
    title: 'Наименование товара',
    description: ['Цикорий и корень цикория'],
    price: 2.5,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'healthy diet',
    name: 'Ячменные напитки',
    sale: false,
    rating: 4,
    image: healthyDiet01,
    imageWebp: healthyDiet01Webp,
    title: 'Наименование товара',
    description: ['Ячменные напитки'],
    price: 2.5,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'healthy diet',
    name: 'Напитки для здоровья',
    sale: false,
    rating: 4,
    image: healthyDiet01,
    imageWebp: healthyDiet01Webp,
    title: 'Наименование товара',
    description: ['Напитки для здоровья'],
    price: 2.5,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'healthy diet',
    name: 'Протеиновые смеси',
    sale: true,
    rating: 4,
    image: healthyDiet01,
    imageWebp: healthyDiet01Webp,
    title: 'Наименование товара',
    description: ['Протеиновые смеси'],
    price: 2.5,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'healthy diet',
    name: 'Толокняные каши',
    sale: false,
    rating: 4,
    image: healthyDiet01,
    imageWebp: healthyDiet01Webp,
    title: 'Наименование товара',
    description: ['Толокняные каши'],
    price: 2.5,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'healthy diet',
    name: 'Цикорий и корень цикория',
    sale: false,
    rating: 4,
    image: healthyDiet01,
    imageWebp: healthyDiet01Webp,
    title: 'Наименование товара',
    description: ['Цикорий и корень цикория'],
    price: 2.5,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'healthy diet',
    name: 'Ячменные напитки',
    sale: false,
    rating: 4,
    image: healthyDiet01,
    imageWebp: healthyDiet01Webp,
    title: 'Наименование товара',
    description: ['Ячменные напитки'],
    price: 2.5,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'healthy diet',
    name: 'Напитки для здоровья',
    sale: true,
    rating: 4,
    image: healthyDiet01,
    imageWebp: healthyDiet01Webp,
    title: 'Наименование товара',
    description: ['Напитки для здоровья'],
    price: 2.5,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'healthy diet',
    name: 'Протеиновые смеси',
    sale: false,
    rating: 4,
    image: healthyDiet01,
    imageWebp: healthyDiet01Webp,
    title: 'Наименование товара',
    description: ['Протеиновые смеси'],
    price: 2.5,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'healthy diet',
    name: 'Толокняные каши',
    sale: false,
    rating: 4,
    image: healthyDiet01,
    imageWebp: healthyDiet01Webp,
    title: 'Наименование товара',
    description: ['Толокняные каши'],
    price: 2.5,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'healthy diet',
    name: 'Цикорий и корень цикория',
    sale: false,
    rating: 4,
    image: healthyDiet01,
    imageWebp: healthyDiet01Webp,
    title: 'Наименование товара',
    description: ['Цикорий и корень цикория'],
    price: 2.5,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'healthy diet',
    name: 'Напитки для здоровья',
    sale: true,
    rating: 4,
    image: healthyDiet01,
    imageWebp: healthyDiet01Webp,
    title: 'Наименование товара',
    description: ['Напитки для здоровья'],
    price: 2.5,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  //=========================== 12
  {
    product: 'healthy diet',
    name: 'Протеиновые смеси',
    sale: false,
    rating: 4,
    image: healthyDiet01,
    imageWebp: healthyDiet01Webp,
    title: 'Наименование товара',
    description: ['Протеиновые смеси'],
    price: 2.5,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'healthy diet',
    name: 'Толокняные каши',
    sale: false,
    rating: 4,
    image: healthyDiet01,
    imageWebp: healthyDiet01Webp,
    title: 'Наименование товара',
    description: ['Толокняные каши'],
    price: 2.5,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'healthy diet',
    name: 'Цикорий и корень цикория',
    sale: false,
    rating: 4,
    image: healthyDiet01,
    imageWebp: healthyDiet01Webp,
    title: 'Наименование товара',
    description: ['Цикорий и корень цикория'],
    price: 2.5,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'healthy diet',
    name: 'Напитки для здоровья',
    sale: false,
    rating: 4,
    image: healthyDiet01,
    imageWebp: healthyDiet01Webp,
    title: 'Наименование товара',
    description: ['Напитки для здоровья'],
    price: 2.5,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
  {
    product: 'healthy diet',
    name: 'Протеиновые смеси',
    sale: false,
    rating: 4,
    image: healthyDiet01,
    imageWebp: healthyDiet01Webp,
    title: 'Наименование товара',
    description: ['Протеиновые смеси'],
    price: 2.5,
    discount: 0.1,
    amount: 1,
    review: [
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      },
      {
        avtor: 'Ирина',
        title: 'Отличный вкус!',
        text: 'Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
        data: '21.12.2020',
        rating: rating,
        ratingWebp: ratingWebp,
        photo: ava,
        photoWebp: avaWebp,
        city: 'г. Москва'
      }
    ]
  },
]

export const itemsBlogTraining = [
  {
    img: pic01,
    imgWebp: pic01Webp,
    text: [
      'Разнообразный и богатый опыт новая модель организационной деятельности позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание модели развития.',

      'Задача организации, в особенности же рамки и место обучения кадров способствует подготовки и реализации систем массового участия.Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития.',

      ' Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу(специалистов) участие в формировании соответствующий условий активизации.С другой стороны реализация намеченных плановых заданий требуют от нас анализа существенных финансовых и административных условий.'
    ]
  },
  {
    title: 'Название темы',
    img: pic02,
    imgWebp: pic02Webp,
    text: [
      'Разнообразный и богатый опыт новая модель организационной деятельности позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание модели развития.',
      'Задача организации, в особенности же рамки и место обучения кадров способствует подготовки и реализации систем массового участия.Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития.',
      ' Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу(специалистов) участие в формировании соответствующий условий активизации.С другой стороны реализация намеченных плановых заданий требуют от нас анализа существенных финансовых и административных условий.'
    ]
  },
  {
    title: 'Название темы',
    img: pic03,
    imgWebp: pic03Webp,
    text: [
      'Разнообразный и богатый опыт новая модель организационной деятельности позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание модели развития.',
      'Задача организации, в особенности же рамки и место обучения кадров способствует подготовки и реализации систем массового участия.Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития.',
      ' Товарищи! реализация намеченных плановых заданий обеспечивает широкому кругу(специалистов) участие в формировании соответствующий условий активизации.С другой стороны реализация намеченных плановых заданий требуют от нас анализа существенных финансовых и административных условий.'
    ]
  },
]

export const itemsBlogNews = [
  {
    img: news01,
    imgWebp: news01Webp,
    title: 'Танзанийский кофе. Откуда он взялся и почему мы его так любим?',
    text: ['Танзания – красивая африканская страна. Именно здесь расположены легендарные географические объекты – вулкан Килиманджаро и озеро Виктория.',

      'Но наш интерес вызван не столько природными красотами, сколько кофе...'],
    author: 'Автор статьи: Иван Иванов',
    link: 'Подробнее'
  },
  {
    img: news01,
    imgWebp: news01Webp,
    title: 'Танзанийский кофе. Откуда он взялся и почему мы его так любим?',
    text: ['Танзания – красивая африканская страна. Именно здесь расположены легендарные географические объекты – вулкан Килиманджаро и озеро Виктория.',

      'Но наш интерес вызван не столько природными красотами, сколько кофе...'],
    author: 'Автор статьи: Иван Иванов',
    link: 'Подробнее'
  },
  {
    img: news01,
    imgWebp: news01Webp,
    title: 'Танзанийский кофе. Откуда он взялся и почему мы его так любим?',
    text: ['Танзания – красивая африканская страна. Именно здесь расположены легендарные географические объекты – вулкан Килиманджаро и озеро Виктория.',

      'Но наш интерес вызван не столько природными красотами, сколько кофе...'],
    author: 'Автор статьи: Иван Иванов',
    link: 'Подробнее'
  },
]

export const itemsBlogNewsNav = [
  'Тег №1',
  'Тег №2',
  'Тег №3',
  'Тег №4',
  'Тег №5',
]

export const itemQuestion = [
  {
    title: 'Чем вы отличаетесь от конкурентов? Почему мне стоит выбрать вас?',
    text: 'Задача организации, в особенности же рамки и место обучения кадров способствует подготовки и реализации систем массового участия. Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития',
  },
  {
    title: 'Чем вы отличаетесь от конкурентов? Почему мне стоит выбрать вас?',
    text: 'Задача организации, в особенности же рамки и место обучения кадров способствует подготовки и реализации систем массового участия. Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития',
  },
  {
    title: 'Чем вы отличаетесь от конкурентов? Почему мне стоит выбрать вас?',
    text: 'Задача организации, в особенности же рамки и место обучения кадров способствует подготовки и реализации систем массового участия. Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития',
  },
  {
    title: 'Чем вы отличаетесь от конкурентов? Почему мне стоит выбрать вас?',
    text: 'Задача организации, в особенности же рамки и место обучения кадров способствует подготовки и реализации систем массового участия. Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития',
  },
  {
    title: 'Чем вы отличаетесь от конкурентов? Почему мне стоит выбрать вас?',
    text: 'Задача организации, в особенности же рамки и место обучения кадров способствует подготовки и реализации систем массового участия. Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития',
  },
]

export const itemShopsContacts = [
  {
    city: 'Наши магазины г. Санкт-Петербург',
    address: ['Гороховая, 53', 'Московский, 53']
  },
  {
    city: 'Наши магазины Калининградская обл.',
    address: ['Советск, Гончарова 2а', 'Черняховск, Пионерская 1', 'Ульяны - Громовой 15', 'Советский проспект 6а',
      'Гурьевск, Каштановая 1г', 'Черняховского 15', 'Панина 2а', 'Ленинский 8Б', 'Аксакова 133', 'Липовая Аллея 2']
  }
]

export const deliveryOptions = [
  {
    text: 'СДЭК - до двери ',
    span: '390 ₽'
  },
  {
    text: 'Почта России ',
    span: '300 ₽'
  },
  {
    text: 'DPD - курьер, 3 дн ',
    span: '427 ₽'
  }
]
