import cuid from "cuid";

export interface Common {
  id: string;
  name: string;
  img: string;
}

export interface Item extends Common {
  price: number;
}

export interface Category extends Common {
  categories?: Category[];
  items?: Item[];
}

export interface Data extends Category {
  pagesCount: number;
}

const data: Category = {
  id: "",
  name: "",
  img: "",
  categories: [
    {
      id: "electrical-appliances",
      name: "Электротовары",
      img: "https://74.img.avito.st/640x480/4755242774.jpg",
      items: [
        {
          id: cuid(),
          name: "Розетка",
          img:
            "https://cs.petrovich.ru/images/2593608/original-400x400-fit.jpg",
          price: 250,
        },
        {
          id: cuid(),
          name: "Лампочка",
          img:
            "https://avatars.mds.yandex.net/get-mpic/1928572/img_id6635934620792325088.png/9hq",
          price: 150,
        },
        {
          id: cuid(),
          name: "Электро автомат",
          img:
            "https://kapro.ua/imgs/Viklyuchatel_avtomaticheskiy_1-p_VA47-29_S_16A_IEK_MVA20-1-016-C_b579.jpg",
          price: 550,
        },
        {
          id: cuid(),
          name: "Кабель",
          img: "https://st30.stpulscen.ru/images/product/119/498/847_big.jpg",
          price: 150,
        },
        {
          id: cuid(),
          name: "Удлиннитель",
          img:
            "https://bestoffice.ru/wa-data/public/shop/products/27/32/3227/images/4577/4577.650.jpg",
          price: 290,
        },
      ],
    },
    {
      id: "tableware",
      name: "Посуда",
      img:
        "https://lh3.googleusercontent.com/proxy/4JzRjq173B1-Xj_BpnD1XuGgWivwQDdYy9nXrnsejxATqn4zRzZSv8iGQxadM5FpOw0ATedgnvTAPSrhYZZltSLxDMkYj5J35XD-Bb4Iigi9suJBZCeYPo2xV_eyaK95zVH5L2bNx3K2nERBtMFS",
      items: [
        {
          id: cuid(),
          name: "Сковородка",
          img: "https://img2.wbstatic.net/large/new/7310000/7311234-1.jpg",
          price: 299,
        },
        {
          id: cuid(),
          name: "Тарелка",
          img:
            "https://granbazar.ru/upload/iblock/63e/63e28d7b00f3a463e720d1e22995d409.jpeg",
          price: 199,
        },
        {
          id: cuid(),
          name: "Чашка",
          img:
            "https://www.ikea.com/ru/ru/images/products/nordby-teacup-with-saucer__0767167_PE754032_S5.JPG?f=s",
          price: 550,
        },
        {
          id: cuid(),
          name: "Стакан",
          img:
            "https://www.ikea.com/ru/ru/images/products/darrocka-glass__0367869_PE549525_S5.JPG?f=s",
          price: 99,
        },
        {
          id: cuid(),
          name: "Мантоварка",
          img:
            "https://main-cdn.goods.ru/big1/hlr-system/1484948/100023466406b0.jpg",
          price: 1290,
        },
      ],
    },
    {
      id: "smartphones",
      name: "Смартфоны и аксессуары",
      img:
        "https://static.mvideo.ru/media/Promotions/Promo_Page/2019/March/obzor-top-10-smartfonov-do-10k/obzor-top-10-smartfonov-do-10k-top1-m.png",
      categories: [
        {
          id: "accessories",
          name: "Аксессуары для смартфонов",
          img: "https://1dp.ru/wp-content/uploads/2017/01/24780525221.jpg",
          items: [
            {
              id: cuid(),
              name: "Чехол",
              img:
                "https://geekufa.ru/images/upload/3614-silikonovaya-nakladka-dlya-smartfona-huawei-honor-8x-sinyaya_1323_1024.jpg",
              price: 299,
            },
            {
              id: cuid(),
              name: "Наушники",
              img:
                "https://www.sony.ru/image/ac123cd3752c08bcfa9433ea41886e78?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
              price: 1199,
            },
            {
              id: cuid(),
              name: "Карта памяти 32",
              img:
                "https://avatars.mds.yandex.net/get-mpic/200316/img_id2600642100691270256/9hq",
              price: 1550,
            },
            {
              id: cuid(),
              name: "Зарядное устройство",
              img:
                "https://des.gbtcdn.com/uploads/pdm-product-pic/Electronic/2018/11/28/source-img/20181128151902_64017.jpg",
              price: 599,
            },
            {
              id: cuid(),
              name: "Батарейка",
              img: "https://akbinfo.ru/wp-content/uploads/2016/04/1-22.jpg",
              price: 990,
            },
          ],
        },
      ],
      items: [
        {
          id: cuid(),
          name: "Xiaomi",
          img:
            "https://avatars.mds.yandex.net/get-mpic/1364191/img_id2810265824028071602.png/9hq",
          price: 12999,
        },
        {
          id: cuid(),
          name: "Iphone",
          img:
            "https://cdn1.technopark.ru/technopark/photos_resized/product/600_600/105491/1_105491.jpg",
          price: 80199,
        },
        {
          id: cuid(),
          name: "Samsung",
          img: "https://img.mvideo.ru/Pdb/30042521b.jpg",
          price: 20550,
        },
        {
          id: cuid(),
          name: "LG",
          img: "https://www.ixbt.com/img/n1/news/2019/7/5/LG-Q70.png",
          price: 18199,
        },
        {
          id: cuid(),
          name: "Huawei",
          img:
            "https://htstatic.imgsmail.ru/pic_image/e503c6153068efe35e50281fd6ba6a85/450/450/1277832/",
          price: 12590,
        },
      ],
    },
  ],
  items: [
    {
      id: cuid(),
      name: "Шруповерт",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQW1SthTaE3KJcgI86c7qhqGVOMO_NBbMpeAC5PdpjOynlH_MCaRXoWK3kY5wt0bGFPtNuFhhE&usqp=CAc",
      price: 5990,
    },
    {
      id: cuid(),
      name: "Циркулярная пила",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuQcNdgOQYApInt4pMD-VvRj_9f7SVYa32VFUpQAMvV8f_AzCEzptpS7_2vQSxj0BTgCpPHKY&usqp=CAc",
      price: 4890,
    },
    {
      id: cuid(),
      name: "Фрезерный станок",
      img:
        "data:image/jpeg;base64,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",
      price: 3390,
    },
    {
      id: cuid(),
      name: "Многофункциональный инструмент",
      img:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJ8AnwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcDBAUIAgH/xAA9EAABAwMCAgcGAwcDBQAAAAABAAIDBAURBhIhMQcTQVFhcYEiMkKRocEUI7EVJDNicoLRUsLwQ3OSstL/xAAYAQEAAwEAAAAAAAAAAAAAAAAAAQIDBP/EAB8RAQADAAEEAwAAAAAAAAAAAAABAhExAwQSIRMUIv/aAAwDAQACEQMRAD8AvFERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBEWOeeGnhdNUSsiiaMue9wa0eZKDIihtw6SbHDKae1ipvFVyEVviMgz/V7vyJX7abhrO7XGGaotVJaLWC4vZNIZJ3jaceDeODyQTFERAREQEREBF8SyxwsL5XtY0c3OOAuNX6ptlKx3Vy/iZByZF/nkhuO4irO79I1dAHCO3MhaeTw/eR8wB+qh9x15cawOabrKR8Ub2hvoduMfJDdXnV19JRNLquoiiA/1uAUdr9f2Kmy2nnNXKPgiwMee7Coaovpe8h++GTnmN317j8loVF0lqAYpx1gbxa4dniO5Bbt06WJWu2U1JHSk8jP7e7yIOFhs/TAfxTYbtSsdETxlp8ggd+08/JU+TPPC8OeHBpwQTx8D4rNSQh08JjY8uGN/HhnPH6Irf1GvVkNxo56GOujqYjSPYHtmLgGkHtyVFL50naftpdHSyvuM7fgpRloPi88P1VWWfTNdqmojoaaXbFAwucyWQ7GgnmB35PYrO070Y2e2bJK/9+mbxDXjEbT4N7URS/nXWCC+az1TC2WwUNJaLfJ7tZWO62Rw72tHD5ghbEHRxS1crKjVNzrr3O052zyFkQPgwclN42MjY1kbWta0YDWjAAX0i7VoLdRW2EQ0FJDTxj4YmBv6LaREBEXy97WNLnkNaBkk9iD6WCpqoaZhdNI1o8VE9Ra1hpd8NF7R7Xn7KBVeoKqqJGTx7Agnd51dURbxStiawfEDucPnw+hUFul+vbmGUXarqGZJ2OPVkeALMAgeWVqbKuUdZMerZ3vOF1LTSSQ/vEtDNU0ZPFxBa0nnw4En0CiY1al5pOwi0l/yRI4PdJ2nd9+awTakqZGFpcfA9o9V0LzbnTVdTVWy3htOTu2A73RjtPDszlc6KzzPd+bsY4/CeJ/8QkRFeHL3HcdW8/toyXComOC5zvVc+rt80gE0TDw4lo7vBSKZlHbm5qXMixz3nC1P25C4j8JTTSxZw6XbtYB5nmpY9P5JnaRrhuoHCRpDg4Dj7X6FbkFvc6YPpWOaBnbk5wPEnzXeZSwx+0I28eWeK3aaEyEdnkjSe4meIcijsQ3B07i5x7G9v3K2iJIrgyipqaMNAa55ceIBOBgDyXcrJ4LNROqZ2Oe/aXMiZ7z8fbxXAuM1S0TSuMbJan+NtGHNx7rQe4cc555PJCtbX92WH0f/AIK332Qz1kEMj4THGySQB0hLgeGfJWgvJUNDPWzPmq6trOJ9p5y447gvQ3RddZbnphkdTM+eWjkMBlk957QAWk+ODjxxlHRSvjGJeiIiwiIgKP6jdWSTMjpoevgY3MsYPE5ypAuC19bCampjEdQx7ney5+xzQOQBwQQgrq807Ku4CGiopIpPijc7OD5kBda1aPqcNdUSQ04PMtG9/wDgLlUs1XU6lmmbTH3/AHTI3grEonuMQM7Np7mv3fZBq02nqChHWw0zaiVoyZqj8x2fBvLKjOtbHe9SQNjopJaIs4tmnqdmCCCC1rOXLvUzkJPJxaPBYtsYOdu53e47j9UHA1LPUW3TD+rMLmuY2GTY3AcHeyXcMDPFVQy61jriymy2KMtlBbG3HFryP0Vs9IUjRpibcRxkj/8AdqpunY51dHO1pkka6UmOIZ985HFHN1s321qSGOsvzqKniM1eZHnc/jgAE9x7PBdu6W+EW2ppork2prtobFHRQhwJyM7pHZIHPgNnLktyh05SOa6518cdOJD7bpnhrR4Z9F0aWqoQ4U9noZbhJnA6tvVxA+ZGT6BRjf7N7UikcNGG3zSmCPaS48wOPIf5wpHZLNNWTmChjbNI04kld/Ch/qPaf5Rx78LuWXSFxriJr3IylhIx+FpRtLh3Odzx4fRTqjpKehp2U9JCyKJgw1jBgBSyp0YjlHoNDWkRh1YJKuf3nSSHgXDkdo4YHYOQ54VS65tV0ori+Gro3BgOI5YosRvHYRjh6L0EvzCN3n/Teg71dmxSGldTxPP8WcFo29/efRXRpTT9Ppy1ijgeXuc8vlkIxudgDl2DgF2OSjWtdUx6do2OhlpXVjnjEEruO3jk4HL1QSZFUjelC7udhtPbzjHDY/PHs95btN0oVLXYrLVE4dvVylpHoQUFnIozY9cWa7yNhErqaoccCKoG3ce4HkfLmpMgLhNmbLRTimG5mXAHPH1XdPJR2sgZ+EkJbtlAxuadrvmEERssLIrlKZJGB+7lxz+imcJBaMclDrHbmx3R073SvcT8byR8lM8hrcnA8ggTTwRD2hl3ifsFG9W3i6W62untlE1z8Et6wE8hn3RxK/dQ6opbI9jer62tqOEELBl7sdpPwt8fllcFto1fqxxdVSyUVG8+4wmNpHiebvqPAINyW5Wmu07TVmpZSH1VOJPwUjtu0kcMNHEnxKjVqt9bXgRWygkkHa4t6tg9BxPrhWFY+jmz2/bLVNNXOCHEv5Z/UqXwwxQRiOGNrGDk1owEUtStp2Vc2royE0ram+1JlePdiByGDub2AfNTy2WigtcQZRU7I8DG7GSfVbyIuIiICIvw8uHNBEulC5V1r0wZrfUNpnPmbHJNu2ua05909+cD1VCy3vqrhWVE8FNVRNcxxp6sEveOALe0ccZOQVamstO61vE/72KaspGOJjhpXBjR4lrzknHiVA63o/uZJDrJWs/7UZI+nBBr2yot93oJZqqpstkbxJEULWyvOeTA3bgdgDt/1Wtbqsujjie/rJTyPbs7HO7uS36To/u4eCy1XA926JzfqcKS2zo7v8gDfwUNGwnJM0rRn0bk5QRhx8Fe2hpquo0tb5K8uMxjOHO5uZk7SfNuFw7B0bUFE9k91mNbK3iI9u2IHxHN3rw8FOQABgcgg/VWtz1nQ0E1ZS3eKVwZM8MqIRnLdxxkZBB8s58FINX3x1HS1cdOcdRGXSOHacZ2/LCrG901PV6fNRJMx1RINxIPag61v11paKbe2sq/J0M7v1GFsXfpNtzKZwt1LUTydjpcRt+5+ipOJ0gmLOXFSqgtkVRRuM04ZhuclBb3R2bbdInXerbBLdnnb1jh7rexrAeQHHx7+anoXl6w3yrtdTLTwTZi45cOQU30/r2+W+dvXsdV0TjxbMdpA/kcf04+iC60WvQVcddRQVcIcI5mB7Q4YOCM8QtgoPzKBzScAjKofUWt33DUU7aqukFuiqHMbDG8tYY2nHIcC44+IEcewLWvuodLmmghskDoZY42E1TpPzHk5LmkbeYJxuBHIAcEF/yP2RueGudtBOGjJPkqhvnSzcZ6t9DZbcyge04MlwB6wHu2cmnzypb0TV1VcdKCoq6p9SDUPbE579xDBgYz28dy6mqNH2fU0f7/AE+2paMR1UPsys/u7R4HIQVk2zX+7wtur9ZyNqm/mSwOrjE+FhA2Esj3AO3HG0c8jiCcLHbekLUlpeI6upir4G+8ayMRyN8HEY2nzyVF9c2u56LuYt5lkmhlhIp6gvdtkiJy5u3kMHm3iM4PaoiG19zl4CSY8s9g+wQejNK9KFlv9xZbXn8JWP4R7nZjld/pa7A4+BAz2ZU6XlK36WkcQ+rqNnI7Y+fzVp2bXV3t0McFRsroowGgzcJCB/MOZ8SCgttFGtL6yo9RTvp4KapjmjbmT2N0beXDeOAPHkcEqSoCIiCr7xdaalutdS1glMnXyZAYXAguJH0IVeXWyiaue61zOhpncercHDb4Y5YV1XjRNFdbjJXSVVTE+TG5rNuOHmFrM6O7WCC+rrn/AN7B/tQUm3Sx3bn1Q8hEB9d32W0ywU7R+d1suOySU7fkAFd8GhrFF71PNKe987/sQujS6ds1KQ6G20wcOTiwOPzPFBStssM8zm/syge4cg6CHl/eBkepUqtmgLpO8PquqpGH3nPO959B/lWmGhoAAwByAX6g16ClbRUUFLG5zmwxtYC7mQBhZnuDGlzuAAyV9Lia1rv2dpW5VDXbX9SWMPc53sj6lB5SqqSR9TK8EYe9zgc95ysYoXE8Xj5qRuY0HAaMeSyRR8c4HyQXV0KU8lN0fUTZBjdNO4eI6xw+yna4+j6X8Fpa1wYwRTMJHiRk/UrsIOJqvTFu1Tb20lyjJ6t2+KRuN0bsYyM9neFU1+0XctOkvdGKiiHKeFvAf1N+H9PFXoiCj7Rpi+3QNNLbpIoj/wBarzC35Ebj6NU0tHRrRxbZL3VPrX5z1MYMUXqAdzvU4Pcp5hEGGkpKeip2U9HBFBAwYZHEwNa0eACzIiAiIgIiICIiAiIgLkansUeobb+AmqJIIjIHuMYBJx2cf+cF10QV6OiW0Zy64Vx8tg/2rMzoqsjRg1dwP97P/lTxEHzExsUbI2+6wBo8gvpEQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB/9k=",
      price: 2990,
    },
    {
      id: cuid(),
      name: "Дрель, шруповерт",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHkPr2sXS_hq7uleWLkXrfM9VPrER7buBcWVSadA5Tsgsj2yV1JqIzt6vq084&usqp=CAc",
      price: 6700,
    },
    {
      id: cuid(),
      name: "Торцовочная пила",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUqV86HKs6m4-ceg_XwXom8-ias65fdtg-P_jM7OLy92H7f8_6uiSlAKQSAh752O_2KQV0iqSw&usqp=CAc",
      price: 5990,
    },
    {
      id: cuid(),
      name: "Перфоратор",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1izMra-OXwPUmUxff1Oe1S-sOOg4RGxzpw-0YxwxsjMyD1Ipioe_TpQGRCpcP06Uyhwwe6DFK&usqp=CAc",
      price: 5020,
    },
    {
      id: cuid(),
      name: "Многофункциональный инструмент аег",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPlrf5hJ3fdZRmOZgYoitlLALppYeORc54Zh4bZpWmeAmj8LLeSTOQHVNW4_vuZOPBrI4JMQV1&usqp=CAc",
      price: 8400,
    },
    {
      id: cuid(),
      name: "Торцовочная пила",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPlrf5hJ3fdZRmOZgYoitlLALppYeORc54Zh4bZpWmeAmj8LLeSTOQHVNW4_vuZOPBrI4JMQV1&usqp=CAc",
      price: 17990,
    },
    {
      id: cuid(),
      name: "Угловая шлифмашина",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpwzuMtCXS1uBjZn0KS13dI5eTOJPFPy7fuXDDFDroebP-FRKffW8dIPOt3jcA1NqiJbx7QBar&usqp=CAc",
      price: 2690,
    },
    {
      id: cuid(),
      name: "Дрель rebir ie",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSUiR-Eo1NN4nR-SMV-ZP569RYYX21R6pVwgYHIUeSM5T3piHlnK7WMifAS5_FeJbVkU3ZzZsVg&usqp=CAc",
      price: 12990,
    },
    {
      id: cuid(),
      name: "Пила интерскол",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTvWBrrdVGcbm3_8NRd5nTtCkcsWAQ1tVlaNn-VfI5s1RKqF0V6L9IeMV2VZZtO8MeNb6VtHHE&usqp=CAc",
      price: 3990,
    },
    {
      id: cuid(),
      name: "Gamepad ps4",
      img: "https://img.mvideo.ru/Pdb/40062000b.jpg",
      price: 3990,
    },
   
  ],
};

const getData = (
  _path: string,
  currentCategory: Category = data,
  lvl: number = 0
): Category => {
  const pathArray = _path === "/" ? [] : _path.split("/").slice(1);

  // Если текущая глубина равна длине массива путей, значит мы дошли до целевого уровня, возвращаем текущий объект
  // предварительно добавляем в его внутренние категории путь до текущей категории (нужно для генерации ссылок)
  if (pathArray.length === lvl) {
    return {
      ...currentCategory,
      categories: currentCategory.categories?.map((category) => ({
        ...category,
        id: `${pathArray.join("/")}/${category.id}`,
      })),
    };
  }
  // Если нет, то находим следующую категорию по пути и рекурсивно вызываем текущую функцию, передав в нее новые параметры
  if (currentCategory.categories) {
    const nextCategory = currentCategory.categories.find(
      (currentCategory) => currentCategory.id === pathArray[lvl]
    );

    if (nextCategory) {
      return getData(_path, nextCategory, lvl + 1);
    }
  }
  // Если мы тут, значит мы получили путь, который не соответствует данным и возвращаем пустой элемент
  return {
    id: "",
    name: "",
    img: "",
  };
};

const fetch = (_url: string) =>
  new Promise<Data>((resolve, reject) => {
    const url = new URL(_url);
    const path = url.pathname;
    const page = parseInt(url.searchParams.get("page") || "1", 10);
    const pageSize = 12;
    const rangeStart = (page - 1) * pageSize;

    const data = getData(path);
    let pagesCount = 1;

    if (data.items) {
      pagesCount = Math.floor(data.items.length / pageSize) + 1;
    }

    const returnData: Data = {
      ...data,
      items: data.items
        ? data.items.slice(rangeStart, rangeStart + pageSize)
        : [],
      pagesCount,
    };

    resolve(returnData);
  });

export default fetch;
