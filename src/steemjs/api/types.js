module.exports = {
    "account_history" : {
        "get_account_history": {
            "desc": {
                "en": "The history of all user actions on the network in the form of transactions. If from = -1, then are last {limit+1} history elements are shown. Parameter limit should be less or equals {from} (except from = -1). This is because elements preceding {from} are shown. ",
                "ru": "История всех действий пользователя в сети в виде транзакций. При from = -1 будут показаны последние {limit+1} элементов истории. Параметр limit не должен превышать from (исключение from = -1), так как показываются предшествующие {from} элементы истории. limit, from и query опциональные параметры. Примеры query {\"select_ops\":[\"transfer\"]} или {\"filter_ops\":[\"transfer\"]}, {\"direction\":\"sender\"} или {\"direction\":\"receiver\"}",
                "de": "",
                "es": ""
            },
            "params": {
                "account": {
                    "type": "String",
                    "desc": {
                        "en": "username",
                        "ru": "имя пользователя",
                        "de": "",
                        "es": ""
                    }
                },
                "from=-1": {
                    "type": "Integer",
                    "desc": {
                        "en": "",
                        "ru": "",
                        "de": "",
                        "es": ""
                    }
                },
                "limit=100": {
                    "type": "Integer",
                    "desc": {
                        "en": "number of results",
                        "ru": "количество результатов",
                        "de": "",
                        "es": ""
                    }
                },
                "query={}": {
                    "type": "Object",
                    "desc": {
                        "en": "Filter",
                        "ru": "Фильтр",
                        "de": "",
                        "es": ""
                    }
                }
            }
        }
    },
    "tags": {
        "get_tags": {
            "desc": {
                "en": "Returns a list of tags (their data) by their names (e.g. \"ru--golos\")",
                "ru": "",
                "de": "",
                "es": ""
            },
            "params": {
                "tags": {
                    "type": "Object",
                    "desc": {
                        "en": "",
                        "ru": "",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_trending_tags": {
            "desc": {
                "en": "Returns a list of tags (tags) that include word combinations",
                "ru": "Возвращает список меток (тэгов) включающие словосочетания",
                "de": "",
                "es": ""
            },
            "params": {
                "afterTag": {
                    "type": "String",
                    "desc": {
                        "en": "word combinations",
                        "ru": "словосочетания",
                        "de": "",
                        "es": ""
                    }
                },
                "limit": {
                    "type": "Integer",
                    "desc": {
                        "en": "number of results",
                        "ru": "количество результатов",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_tags_used_by_author": {
            "desc": {
                "en": "",
                "ru": "",
                "de": "",
                "es": ""
            },
            "params": {
                "author": {
                    "type": "String",
                    "desc": {
                        "en": "username",
                        "ru": "имя пользователя",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_discussions_by_trending": {
            "desc": {
                "en": "Displays a limited number of publications beginning with the most expensive of the award.",
                "ru": " Отображает ограниченное количество публикаций начиная с самой дорогой по вознаграждению.",
                "de": "",
                "es": ""
            },
            "desc2":{
                "en": "### Parameters: <br> ** limit: 0 ** - the number of returned records can not be greater than 100. Default is 0 <br> ** select_authors: ['', '' ...] ** - array contains Authors names <br> ** select_tags: ['', '', ...] ** - Tag list, messages without these tags are filtered by ** filter_tags: ['', '', ...] * * - Tag list, messages with these tags are filtered by ### Optional parameters: <br> ** start_author: '' ** - the author's name from which to start looking for <br> ** start_permlink: '' ** - Link of the publication to start looking for <br> ** parent_author: '' ** - the author's name of the discussion that started the discussion <br> ** parent_permlink: '' ** - a permanent link to the parent discussion ",
                "ru":"### Параметры:<br>**limit: 0** - количество возвращаемых записей не может быть больше 100. По умолчанию 0<br>**select_authors: ['',''...]** - массив содержит имена авторов<br>**select_tags: ['','',...]** - Список тегов, сообщения без этих тегов фильтруются<br>**filter_tags: ['','',...]** - Список тегов, сообщения с этими тегами фильтруются<br>### Не обязательные параметры:<br>**start_author: '' ** - имя автора с которого начинать искать<br>**start_permlink: '' ** - ссылка публикации с которой начинать искать<br>**parent_author: '' ** - имя автора стартовавшего дискуссию<br>**parent_permlink: '' ** - постоянная ссылка на родительскую дискуссию",
                "de": "",
                "es": ""
            },
            "params": {
                "query": {
                    "type": "Object",
                    "desc": {
                        "en": "",
                        "ru": "",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_discussions_by_trending30": {
            "desc": {
                "en": "Displays a limited number of publications on remuneration",
                "ru": "Отображает ограниченное количество публикаций по вознаграждению",
                "de": "",
                "es": ""
            },
            "params": {
                "query": {
                    "type": "Object",
                    "desc": {
                        "en": "",
                        "ru": "",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_discussions_by_created": {
            "desc": {
                "en": "Displays a limited number of publications, starting with the newest one.",
                "ru": "Отображает ограниченное количество публикаций начиная с самой новой.",
                "de": "",
                "es": ""
            },
            "params": {
                "query": {
                    "type": "Object",
                    "desc": {
                        "en": "",
                        "ru": "",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_discussions_by_donates": {
            "desc": {
                "en": "Displays a limited number of publications, starting with the most donated one.",
                "ru": "",
                "de": "",
                "es": ""
            },
            "params": {
                "query": {
                    "type": "Object",
                    "desc": {
                        "en": "",
                        "ru": "",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_discussions_by_active": {
            "desc": {
                "en": "Displays a limited number of entries in which there was activity since the newest.",
                "ru": "Отображает ограниченное количество записей в которых была активность начиная с самой новой.",
                "de": "",
                "es": ""
            },
            "params": {
                "query": {
                    "type": "Object",
                    "desc": {
                        "en": "",
                        "ru": "",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_discussions_by_cashout": {
            "desc": {
                "en": "Displays a limited number of publications, sorted by the time of payments",
                "ru": "Отображает ограниченное количество публикаций, отсортированных по времени выплат",
                "de": "",
                "es": ""
            },
            "params": {
                "query": {
                    "type": "Object",
                    "desc": {
                        "en": "",
                        "ru": "",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_discussions_by_payout": {
            "desc": {
                "en": "Displays a limited number of publications sorted by payments",
                "ru": "Отображает ограниченное количество публикаций , отсортированных по выплатам",
                "de": "",
                "es": ""
            },
            "params": {
                "query": {
                    "type": "Object",
                    "desc": {
                        "en": "",
                        "ru": "",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_discussions_by_votes": {
            "desc": {
                "en": "Displays a limited number of publications, sorted by votes.",
                "ru": "Отображает ограниченное количество публикаций, отсортированных по величине голосов.",
                "de": "",
                "es": ""
            },
            "params": {
                "query": {
                    "type": "Object",
                    "desc": {
                        "en": "",
                        "ru": "",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_discussions_by_children": {
            "desc": {
                "en": "Displays a limited number of publications sorted by the number of comments",
                "ru": "Отображает ограниченное количество публикаций, отсортированных по количеству комментариев",
                "de": "",
                "es": ""
            },
            "params": {
                "query": {
                    "type": "Object",
                    "desc": {
                        "en": "",
                        "ru": "",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_discussions_by_hot": {
            "desc": {
                "en": "Displays a limited number of publications, sorted by popularity.",
                "ru": "Отображает ограниченное количество публикаций, отсортированных по популярности.",
                "de": "",
                "es": ""
            },
            "params": {
                "query": {
                    "type": "Object",
                    "desc": {
                        "en": "",
                        "ru": "",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_discussions_by_feed": {
            "desc": {
                "en": "Displays a limited number of conversion records for a specific author",
                "ru": "Отображает ограниченное количество записей конверсий конкретного автора",
                "de": "",
                "es": ""
            },
            "params": {
                "query": {
                    "type": "Object",
                    "desc": {
                        "en": "",
                        "ru": "",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_discussions_by_blog": {
            "desc": {
                "en": "Displays a limited number of publications, from a blog of a specific author.",
                "ru": "Отображает ограниченное количество публикаций, из блога конкретного автора.",
                "de": "",
                "es": ""
            },
            "params": {
                "query": {
                    "type": "Object",
                    "desc": {
                        "en": "",
                        "ru": "",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_discussions_by_comments": {
            "desc": {
                "en": "Displays a limited number of publications, from the comments of a particular author.",
                "ru": "Отображает ограниченное количество публикаций, из комментариев конкретного автора.",
                "de": "",
                "es": ""
            },
            "params": {
                "query": {
                    "type": "Object",
                    "desc": {
                        "en": "",
                        "ru": "",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_discussions_by_promoted": {
            "desc": {
                "en": "Displays a limited number of publications sorted by an increased balance amount",
                "ru": "Отображает ограниченное количество публикаций, отсортированных с помощью увеличенной суммы баланса",
                "de": "",
                "es": ""
            },
            "params": {
                "query": {
                    "type": "Object",
                    "desc": {
                        "en": "",
                        "ru": "",
                        "de": "",
                        "es": ""
                    }
                }
            }
        }
        
    },
    "database_api": {
        "get_block_header": {
            "desc": {
                "en": "Returns block for given number, excl. transactions and witness signature (use <code>get_block</code>, <code>get_ops_in_block</code>, <code>get_events_in_block</code>)",
                "ru": "Возвращает все данные о блоке, кроме транзакций и подписи делегата (используйте <code>get_block</code>, <code>get_ops_in_block</code>, <code>get_events_in_block</code>).",
                "de": "",
                "es": ""
            },
            "params": {
                "blockNum": {
                    "type": "Integer",
                    "desc": {
                        "en": "block number",
                        "ru": "номер блока",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_block": {
            "desc": {
                "en": "Returns block for given number, incl. transactions with operations. Stores data for whole blockchain lifetime. But not includes <b>virtual</b> operations (use <code>get_ops_in_block</code>, <code>get_events_in_block</code>).",
                "ru": "Возвращает все данные о блоке, включая транзакции с операциями. Хранит данные за все время. Но не включает <b>виртуальных</b> операций (используйте <code>get_ops_in_block</code>, <code>get_events_in_block</code>).",
                "de": "",
                "es": ""
            },
            "params": {
                "blockNum": {
                    "type": "Integer",
                    "desc": {
                        "en": "block number",
                        "ru": "номер блока",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_config": {
            "desc": {
                "en": "Displays the current node configuration. This configuration is set by developers and can be changed only by their, when code base updates. E.g, <code>STEEMIT_BLOCKCHAIN_HARDFORK_VERSION</code> is not current applied HF. It may be just planned HF, which will be applied after some time.",
                "ru": "Отображает текущую конфигурацию узла, заданную разработчиками и изменяемую только ими же, при обновлении кодовой базы. Например, <code>STEEMIT_BLOCKCHAIN_HARDFORK_VERSION</code> - это не принятый на данный момент ХФ, а максимальный ХФ, существующий в данной кодовой базе. Этот ХФ может быть еще не принят на момент запроса.",
                "de": "",
                "es": ""
            }
        },
        "get_dynamic_global_properties": {
            "desc": {
                "en": "Displays information about the current network status (e.g. head block number).",
                "ru": "Отображает информацию о текущем состоянии сети (<code>head_block_number</code> - № последнего блока и др.)",
                "de": "",
                "es": ""
            }
        },
        "get_chain_properties": {
            "desc": {
                "en": "Displays some blockchain parameters which are set by its TOP-witnesses (by median).",
                "ru": "Отображает различные параметры блокчейна, выставляемые его ТОП-делегатами (каждый ТОП-делегат предлагает то или иное значение, берется медиана).",
                "de": "",
                "es": ""
            }
        },
        "get_feed_history": {
            "desc": {
                "en": "Displays the conversion history",
                "ru": "Отображает историю конверсий",
                "de": "",
                "es": ""
            }
        },
        "get_hardfork_version": {
            "desc": {
                "en": "Displays the current version of the network.",
                "ru": "Отображает текущую версию сети.",
                "de": "",
                "es": ""
            }
        },
        "get_invite": {
            "desc": {
                "en": "Returns invite code data by public key.<br>If invite not exists (wrong public key, or already claimed), returns <b>null</b> instead of JSON-object.",
                "ru": "Возвращает данные инвайт-чека по его публичному ключу.<br>Если инвайт-чек уже погашен или вовсе отсутствует, то возвращает <b>null</b> вместо JSON-объекта.",
                "de": "",
                "es": ""
            }
        },
        "get_next_scheduled_hardfork": {
            "desc": {
                "en": "Displays the date and version of HardFork",
                "ru": "Отображает дату и версию HardFork",
                "de": "",
                "es": ""
            }
        },
        "get_accounts": {
            "desc": {
                "en": "Returns data for specified accounts. Returns array of objects, which contains an object for each existant account. If some account is not existant, it just skipped (no null added). Compare with <code>lookup_account_names</code> method.",
                "ru": "Возвращает данные по заданным аккаунтам. Возвращает массив объектов - на каждый существующий аккаунт добавляется объект. Если какого-то аккаунта не существует, то он просто пропускается (а не добавляется null вместо объекта). Сравните с методом <code>lookup_account_names</code>.",
                "de": "Liefert Daten für eingegebene Benutzer zurück",
                "es": ""
            },
            "params": {
                "accountNames": {
                    "type": "Array",
                    "desc": {
                        "en": "accounts(strings) in nested array",
                        "ru": "имена аккаунтов (строки) в виде массива",
                        "de": "Kontennamen als ein Array",
                        "es": ""
                    }
                },
                "query={}": {
                    "type": "Object",
                    "desc": {
                        "en": "",
                        "ru": "",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_accounts_balances": {
            "desc": {
                "en": "Returns UIA-balances for specified accounts",
                "ru": "Возвращает данные по UIA-балансам заданных аккаунтов",
                "de": "",
                "es": ""
            },
            "params": {
                "account_names": {
                    "type": "Array",
                    "desc": {
                        "en": "accounts(strings) in nested array",
                        "ru": "имена аккаунтов (строки) в виде массива",
                        "de": "",
                        "es": ""
                    }
                },
                "query={}": {
                    "type": "Object",
                    "desc": {
                        "en": "All params are optional. In simplest case just use <code>{}</code>.<ul><li>system. Also get balances in GOLOS and GBG. Default is false</li> <li>symbols. Get balances only in specific assets. Default is [], i.e. get all UIA balances.</li> <li>token_holders. String with name of token, to get all its holders. Default - not set./li></ul> Example: <code>getAccountsBalances([], {\"token_holders\": \"YMUSDT\"})</code>",
                        "ru": "Все параметры опциональны, в простейшем варианте достаточно <code>{}</code>. <ul><li>system. Выдать также балансы в GOLOS и GBG. По умолчанию - false</li> <li>symbols. Выдать балансы только определенных токенов. По умолчанию - [], то есть выдать все UIA.</li> <li>token_holders. Строка, содержащая имя токена, чтобы получить всех владельцев данного токена. По умолчанию - не задано.</li></ul> Пример получения всех владельцев токена: <code>getAccountsBalances([], {\"token_holders\": \"YMUSDT\"})</code>",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_assets": {
            "desc": {
                "en": "Returns data for specified User Issued Assets. If creator set, returns assets of that creator. If symbols set, returns specific assets (by symbols). If nothing set, returns all assets.",
                "ru": "Возвращает данные по UIA-активам, принадлежащим юзеру или имеющимся во всей системе в целом (не путать с балансами UIA, возвращаемыми методом <code>get_accounts_balances</code>).<br>Если <code>creator</code> задан, то возвращает активы этого пользователя.<br>Если задано поле <code>symbols</code> и не задано поле <code>creator</code>, то возвращает активы по этим символам (пример символов: \"YMUSDT\", \"DOGECOIN\").<br>Если не задано ни одно из этих полей, то возвращает вообще все активы, какие есть в блокчейне.",
                "de": "",
                "es": ""
            },
            "params": {
                "symbols=[]": {
                    "type": "Array",
                    "desc": {
                        "en": "symbols(strings) in array. E.g: [\"YMUSDT\"]. Warning: do not set creator if this param set.",
                        "ru": "",
                        "de": "",
                        "es": ""
                    }
                },
                "sort=\"by_symbol_name\"": {
                    "desc": {
                        "en": "by_symbol_name, by_marketed",
                        "ru": "",
                        "de": "",
                        "es": ""
                    }
                },
                "query={}": {
                    "type": "Object",
                    "desc": {
                        "en": "All params are optional. In simplest case just use <code>{}</code>.<ul><li>system. Also get balances in GOLOS and GBG. Default is false</li> </ul>",
                        "ru": "Все параметры опциональны, в простейшем варианте достаточно <code>{}</code>. <ul><li>system. Выдать также балансы в GOLOS и GBG. По умолчанию - false</li> </ul>",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "lookup_account_names": {
            "desc": {
                "en": "Returns data for specified accounts. Returns array of objects, which contains an object for each existant account, or null, if account not exists. Compare with <code>get_accounts</code> method.",
                "ru": "Возвращает данные по заданным аккаунтам. Возвращает массив объектов - на каждый существующий аккаунт добавляется объект или null. Если какого-то аккаунта не существует, то добавляется null вместо объекта (таким образом длина массива и индексы объектов всегда равны индексу имени аккаунта во входном массиве). В этом заключается принципиальное отличие от <code>get_accounts</code>.",
                "de": "",
                "es": ""
            },
            "params": {
                "accountNames": {
                    "type": "Array",
                    "desc": {
                        "en": "accounts(strings) in nested array",
                        "ru": "имена аккаунтов (строки) в виде массива",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "lookup_accounts": {
            "desc": {
                "en": "Returns the names of users close to the phrase.",
                "ru": "Возвращает имена пользователей близких к шаблону.",
                "de": "",
                "es": ""
            },
            "params": {
                "lowerBoundName": {
                    "type": "String",
                    "desc": {
                        "en": "search template",
                        "ru": "шаблон поиска",
                        "de": "",
                        "es": ""
                    }
                },
                "limit": {
                    "type": "Integer",
                    "desc": {
                        "en": "number of results",
                        "ru": "количество результатов",
                        "de": "",
                        "es": ""
                    }
                },
                "includeFrozen=false": {
                    "type": "Boolean",
                    "desc": {
                        "en": "include frozen accounts",
                        "ru": "включая замороженные аккаунты",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_account_count": {
            "desc": {
                "en": "Returns the number of registered users.",
                "ru": "Возвращает количество зарегистрированных пользователей.",
                "de": "",
                "es": ""
            }
        },
        "get_conversion_requests": {
            "desc": {
                "en": "Returns the current requests for conversion by the specified user",
                "ru": "Возвращает текущие запросы на конвертацию указанным пользователем",
                "de": "",
                "es": ""
            },
            "params": {
                "accountName": {
                    "type": "String",
                    "desc": {
                        "en": "username",
                        "ru": "имя пользователя",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_owner_history": {
            "desc": {
                "en": "Displays the user name if he changed the ownership of the blockchain",
                "ru": "Отображает имя пользователя если он изменил право собственности на блокчейн",
                "de": "",
                "es": ""
            },
            "params": {
                "account": {
                    "type": "String",
                    "desc": {
                        "en": "username",
                        "ru": "имя пользователя",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_recovery_request": {
            "desc": {
                "en": "Returns true if the user is in recovery status.",
                "ru": "Возвращает true если пользователь в статусе на восстановление.",
                "de": "",
                "es": ""
            },
            "params": {
                "account": {
                    "type": "String",
                    "desc": {
                        "en": "username",
                        "ru": "имя пользователя",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_escrow": {
            "desc": {
                "en": "Returns the operations implemented through mediation.",
                "ru": "Возвращает операции реализованные с помощью посредничества.",
                "de": "",
                "es": ""
            },
            "params": {
                "from": {
                    "type": "String",
                    "desc": {
                        "en": "reseller Name",
                        "ru": "имя посредника",
                        "de": "",
                        "es": ""
                    }
                },
                "escrowId": {
                    "type": "Integer",
                    "desc": {
                        "en": "unique transaction number",
                        "ru": "уникальный номер операции",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_withdraw_routes": {
            "desc": {
                "en": "Returns all transfers to the user's account, depending on the type",
                "ru": "Возвращает все переводы на счету пользователя в зависимости от типа",
                "de": "",
                "es": ""
            },
            "params": {
                "account": {
                    "type": "String",
                    "desc": {
                        "en": "username",
                        "ru": "имя пользователя",
                        "de": "",
                        "es": ""
                    }
                },
                "withdrawRouteType": {
                    "type": "String",
                    "desc": {
                        "en": "the type of transfer can be (incoming, outgoing, all)",
                        "ru": "тип перевода может быть (incoming,outgoing,all)",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_account_bandwidth": {
            "desc": {
                "en": "Displays user actions based on type",
                "ru": "Отображает действия пользователя в зависимости от типа",
                "de": "",
                "es": ""
            },
            "params": {
                "account": {
                    "type": "String",
                    "desc": {
                        "en": "username",
                        "ru": "имя пользователя",
                        "de": "",
                        "es": ""
                    }
                },
                "bandwidthType": {
                    "type": "Integer",
                    "desc": {
                        "en": "post, forum, market,  custom_json",
                        "ru": "post, forum, market,  custom_json",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_savings_withdraw_from": {
            "desc": {
                "en": "Returns the output data from 'SAFE' for this user",
                "ru": "Возвращает данные о выводах из 'СЕЙФА' для данного пользователя",
                "de": "",
                "es": ""
            },
            "params": {
                "account": {
                    "type": "String",
                    "desc": {
                        "en": "username",
                        "ru": "имя пользователя",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_savings_withdraw_to": {
            "desc": {
                "en": "Returns the output data from 'SAFE' for this user",
                "ru": "Возвращает данные о выводах из 'СЕЙФА' для данного пользователя",
                "de": "",
                "es": ""
            },
            "params": {
                "account": {
                    "type": "String",
                    "desc": {
                        "en": "username",
                        "ru": "имя пользователя",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_transaction_hex": {
            "desc": {
                "en": "Displays the HEX transaction string.",
                "ru": "Отображает HEX строку транзакции.",
                "de": "",
                "es": ""
            },
            "params": {
                "trx": {
                    "type": "Object",
                    "desc": {
                        "en": "signed transaction.",
                        "ru": "подписанная транзакция",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_required_signatures": {
            "desc": {
                "en": "This API will take a partially signed transaction and a set of public keys that the owner has the ability to sign for and return the minimal subset of public keys that should add signatures to the transaction.",
                "ru": "Возвращает список ключей которыми может быть подписанна указанная транзакция, на основании списка предоставленных ключей(второй параметр)",
                "de": "",
                "es": ""
            },
            "params": {
                "trx": {
                    "type": "Object",
                    "desc": {
                        "en": "signed transaction",
                        "ru": "подписанная транзакция",
                        "de": "",
                        "es": ""
                    }
                },
                "availableKeys": {
                    "type": "Array",
                    "desc": {
                        "en": "List of keys in the form of a string array",
                        "ru": "список ключей в виде строкового масива",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_potential_signatures": {
            "desc": {
                "en": "Displays the potential key for this transaction.",
                "ru": "Отображает потенциальный ключ для данной транзакции.",
                "de": "",
                "es": ""
            },
            "params": {
                "trx": {
                    "type": "Object",
                    "desc": {
                        "en": "signed transaction.",
                        "ru": "подписанная транзакция",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "verify_authority": {
            "desc": {
                "en": "Returns TRUE if the transaction is signed correctly",
                "ru": "Возвращает TRUE если транзакция подписана правильно",
                "de": "",
                "es": ""
            },
            "params": {
                "trx": {
                    "type": "Object",
                    "desc": {
                        "en": "signed transaction.",
                        "ru": "подписанная транзакция",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "verify_account_authority": {
            "desc": {
                "en": "Return true if the signers have enough authority to authorize an account",
                "ru": "Возвращает  true, если у пользователя есть достаточные полномочия для авторизации учетной записи",
                "de": "",
                "es": ""
            },
            "params": {
                "nameOrId": {
                    "type": "String",
                    "desc": {
                        "en": "username or id",
                        "ru": "имя пользователя или id",
                        "de": "",
                        "es": ""
                    }
                },
                "signers": {
                    "type": "Array",
                    "desc": {
                        "en": "List of keys in the form of a string array",
                        "ru": "список ключей в виде строкового масива",
                        "de": "",
                        "es": ""
                    }
                }
            }
        }
    },
    "account_by_key": {
        "get_key_references": {
            "desc": {
                "en": "Finds accounts using specified public key (detects posting, active, owner, but NOT detects memo)",
                "ru": "Возвращает аккаунты, использующие данный  публичный ключ (обнаруживает posting, active, owner, но НЕ обнаруживает memo)",
                "de": "",
                "es": ""
            },
            "params": {
                "account_name_type": {
                    "type": "Array",
                    "desc": {
                        "en": "public key",
                        "ru": "Публичный ключ",
                        "de": "",
                        "es": ""
                    }
                }
            }
        }
    },
    "account_notes": {
        "get_values": {
            "desc": {
                "en": "Get values of specified account by specified keys (or all its values)",
                "ru": "Получает значения, которые хранит заданный аккаунт. Позволят получить значения по ключам или вообще все значения",
                "de": "",
                "es": ""
            },
            "params": {
                "keys=[]": {
                    "type": "Object",
                    "desc": {
                        "en": "array of strings - keys. Or use [] to obtain all values of that accounts",
                        "ru": "массив строк - ключи, по которым надо получить значения.<br/>Используйте <code>[]</code>, чтобы получить все значения аккаунта",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_values_settings": {
            "desc": {
                "en": "Returns account_notes limits on current Golos node, which need to be considered by users.",
                "ru": "Возвращает лимиты, действующие в account_notes на данной ноде Golos. Эти лимиты необходимо учитывать, поскольку за их пределами плагин может не сохранять информацию.",
                "de": "",
                "es": ""
            }
        }
    },
    "follow": {
        "get_followers": {
            "desc": {
                "en": "Returns the list: Either all of the subscribers of the user are 'following'. Or, if the user name is specified, the list of matching subscribers is returned in the parameter 'startFollower'.",
                "ru": "Возвращает список: Либо всех подписчиков пользователя 'following'. Либо если указано имя пользователя в параметре 'startFollower' возвращается список совпадающих подписчиков.",
                "de": "",
                "es": ""
            },
            "params": {
                "following": {
                    "type": "String",
                    "desc": {
                        "en": "username",
                        "ru": "имя пользователя",
                        "de": "",
                        "es": ""
                    }
                },
                "startFollower": {
                    "type": "String",
                    "desc": {
                        "en": "username (can be empty)",
                        "ru": "имя пользователя (может быть пустым)",
                        "de": "",
                        "es": ""
                    }
                },
                "followType": {
                    "type": "String",
                    "desc": {
                        "en": "String values (undefined, blog, ignore)",
                        "ru": "строковые значения (undefined,blog,ignore)",
                        "de": "",
                        "es": ""
                    }
                },
                "limit": {
                    "type": "Integer",
                    "desc": {
                        "en": "number of results",
                        "ru": "количество результатов",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_following": {
            "desc": {
                "en": "",
                "ru": "",
                "de": "",
                "es": ""
            },
            "params": {
                "follower": {
                    "type": "String",
                    "desc": {
                        "en": "username",
                        "ru": "имя пользователя",
                        "de": "",
                        "es": ""
                    }
                },
                "startFollowing": {
                    "type": "String",
                    "desc": {
                        "en": "username",
                        "ru": "имя пользователя",
                        "de": "",
                        "es": ""
                    }
                },
                "followType": {
                    "type": "String",
                    "desc": {
                        "en": "String values (undefined, blog, ignore)",
                        "ru": "строковые значения (undefined,blog,ignore)",
                        "de": "",
                        "es": ""
                    }
                },
                "limit": {
                    "type": "Integer",
                    "desc": {
                        "en": "number of results",
                        "ru": "количество результатов",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_follow_count": {
            "desc": {
                "en": "Returns information about the number of subscribers and subscriptions of the specified user.",
                "ru": "Возвращает данные о количестве подписчиков и подписок указанного пользователя.",
                "de": "",
                "es": ""
            },
            "params": {
                "account": {
                    "type": "String",
                    "desc": {
                        "en": "username",
                        "ru": "имя пользователя",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_feed_entries": {
            "desc": {
                "en": "Returns brief information about records from the specified user's tape",
                "ru": "Возвращает краткие данные о записях из ленты указанного пользователя",
                "de": "",
                "es": ""
            },
            "params": {
                "account": {
                    "type": "String",
                    "desc": {
                        "en": "username",
                        "ru": "имя пользователя",
                        "de": "",
                        "es": ""
                    }
                },
                "entryId": {
                    "type": "Integer",
                    "desc": {
                        "en": "id records (if 0 then the most recent)",
                        "ru": "id записи (если 0 то самые свежие)",
                        "de": "",
                        "es": ""
                    }
                },
                "limit": {
                    "type": "Integer",
                    "desc": {
                        "en": "number of results",
                        "ru": "количество результатов",
                        "de": "",
                        "es": ""
                    }
                },
                "filterTagMasks=[]": {
                    "type": "Object",
                    "desc": {
                        "en": "",
                        "ru": "",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_feed": {
            "desc": {
                "en": "Returns the complete record data from the specified user's tape.",
                "ru": "Возвращает полные данные о записях из ленты указанного пользователя.",
                "de": "",
                "es": ""
            },
            "params": {
                "account": {
                    "type": "String",
                    "desc": {
                        "en": "username",
                        "ru": "имя пользователя",
                        "de": "",
                        "es": ""
                    }
                },
                "entryId": {
                    "type": "Integer",
                    "desc": {
                        "en": "id records (if 0 then the most recent)",
                        "ru": "id записи (если 0 то самые свежие)",
                        "de": "",
                        "es": ""
                    }
                },
                "limit": {
                    "type": "Integer",
                    "desc": {
                        "en": "number of results",
                        "ru": "количество результатов",
                        "de": "",
                        "es": ""
                    }
                },
                "filterTagMasks=[]": {
                    "type": "Object",
                    "desc": {
                        "en": "",
                        "ru": "",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_blog_entries": {
            "desc": {
                "en": "Returns brief information about records from the blog of the specified user.",
                "ru": "Возвращает краткие данные о записях из блога указанного пользователя.",
                "de": "",
                "es": ""
            },
            "params": {
                "account": {
                    "type": "String",
                    "desc": {
                        "en": "username",
                        "ru": "имя пользователя",
                        "de": "",
                        "es": ""
                    }
                },
                "entryId": {
                    "type": "Integer",
                    "desc": {
                        "en": "id records (if 0 then the most recent)",
                        "ru": "id записи (если 0 то самые свежие)",
                        "de": "",
                        "es": ""
                    }
                },
                "limit": {
                    "type": "Integer",
                    "desc": {
                        "en": "number of results",
                        "ru": "количество результатов",
                        "de": "",
                        "es": ""
                    }
                },
                "filterTagMasks=[]": {
                    "type": "Object",
                    "desc": {
                        "en": "",
                        "ru": "",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_blog": {
            "desc": {
                "en": "Returns the complete record data from the blog of the specified user.",
                "ru": "Возвращает полные данные о записях из блога указанного пользователя.",
                "de": "",
                "es": ""
            },
            "params": {
                "account": {
                    "type": "String",
                    "desc": {
                        "en": "username",
                        "ru": "имя пользователя",
                        "de": "",
                        "es": ""
                    }
                },
                "entryId": {
                    "type": "Integer",
                    "desc": {
                        "en": "id records (if 0 then the most recent)",
                        "ru": "id записи (если 0 то самые свежие)",
                        "de": "",
                        "es": ""
                    }
                },
                "limit": {
                    "type": "Integer",
                    "desc": {
                        "en": "number of results",
                        "ru": "количество результатов",
                        "de": "",
                        "es": ""
                    }
                },
                "filterTagMasks=[]": {
                    "type": "Object",
                    "desc": {
                        "en": "",
                        "ru": "",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_account_reputations": {
            "desc": {
                "en": "Returns data about the reputation of users.",
                "ru": "Возвращает данные о репутации пользователей.",
                "de": "",
                "es": ""
            },
            "params": {
                "names": {
                    "type": "Array",
                    "desc": {
                        "en": "accounts(strings) in nested array",
                        "ru": "имена аккаунтов (строки) в виде массива",
                        "de": "Kontennamen als ein Array",
                        "es": ""
                    }
                }
            }
        },
        "get_reblogged_by": {
            "desc": {
                "en": "Returns the list of users who either created the record or made it a repost.",
                "ru": "Возвращает список пользователей которые либо создали запись либо сделали её репост.",
                "de": "",
                "es": ""
            },
            "params": {
                "author": {
                    "type": "String",
                    "desc": {
                        "en": "username",
                        "ru": "имя пользователя",
                        "de": "",
                        "es": ""
                    }
                },
                "permlink": {
                    "type": "String",
                    "desc": {
                        "en": "link to publication",
                        "ru": "ссылка на публикацию",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_blog_authors": {
            "desc": {
                "en": "Returns the list of authors and the number of reposts of this author by the user.",
                "ru": "Возвращает список авторов и количество репостов этого автора пользователем.",
                "de": "",
                "es": ""
            },
            "params": {
                "blogAccount": {
                    "type": "String",
                    "desc": {
                        "en": "username",
                        "ru": "имя пользователя",
                        "de": "",
                        "es": ""
                    }
                }
            }
        }
    },
    "network_broadcast_api": {
        "broadcast_transaction": {
            "desc": {
                "en": "The transaction will be checked for validity in the local database prior to broadcasting. If it fails to apply locally, an error will be thrown and the transaction will not be broadcast.",
                "ru": "Транзакция будет проверяться на достоверность в локальной базе данных до начала трансляции. Если он не может применяться локально, будет вызвана ошибка, и транзакция не будет транслироваться.",
                "de": "",
                "es": ""
            },
            "params": {
                "trx": {
                    "type": "Object",
                    "desc": {
                        "en": "signed transaction",
                        "ru": "подписанная транзакция",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "broadcast_transaction_with_callback": {
            "desc": {
                "en": "this version of broadcast transaction registers a callback method that will be called when the transaction is included into a block.  The callback method includes the transaction id, block number, and transaction number in the block.",
                "ru": "Эта версия широковещательной транзакции регистрирует метод обратного вызова, который будет вызываться, когда транзакция включена в блок. Метод обратного вызова включает идентификатор транзакции, номер блока и номер транзакции в блоке.",
                "de": "",
                "es": ""
            },
            "params": {
                "confirmationCallback": {
                    "type": "String",
                    "desc": {
                        "en": "callback method",
                        "ru": "метод обратного вызова",
                        "de": "",
                        "es": ""
                    }
                },
                "trx": {
                    "type": "Object",
                    "desc": {
                        "en": "signed transaction",
                        "ru": "подписанная транзакция",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "broadcast_transaction_synchronous": {
            "desc": {
                "en": "This call will not return until the transaction is included in a block.",
                "ru": "Этот вызов не будет возвращен до тех пор, пока транзакция не будет включена в блок.",
                "de": "",
                "es": ""
            },
            "params": {
                "trx": {
                    "type": "Object",
                    "desc": {
                        "en": "signed transaction",
                        "ru": "подписанная транзакция",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "broadcast_block": {
            "desc": {
                "en": "",
                "ru": "",
                "de": "",
                "es": ""
            },
            "params": {
                "b": {
                    "type": "String",
                    "desc": {
                        "en": "",
                        "ru": "",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "set_max_block_age": {
            "desc": {
                "en": "",
                "ru": "",
                "de": "",
                "es": ""
            },
            "params": {
                "maxBlockAge": {
                    "type": "String",
                    "desc": {
                        "en": "",
                        "ru": "",
                        "de": "",
                        "es": ""
                    }
                }
            }
        }
    },
    "market_history": {
        "get_depth": {
            "desc": {
                "en": "Returns the market depth for the internal market",
                "ru": "",
                "de": "",
                "es": ""
            },
            "params": {
                "pair=[\"GOLOS\", \"GBG\"]": {
                    "type": "Object",
                    "desc": {
                        "en": "array of 2 items - first and second symbol in market pair",
                        "ru": "",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_fillable_orders": {
            "desc": {
                "en": "Returns the fillable orders for the internal market",
                "ru": "",
                "de": "",
                "es": ""
            },
            "params": {
                "market_price": {
                    "type": "Object",
                    "desc": {
                        "en": "object of 2 fields (assets) - base and quote",
                        "ru": "",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_open_orders": {
            "desc": {
                "en": "Displays a list of orders on the internal exchange for the purchase and sale on the network for the specified user.",
                "ru": "Отображает список заявок на внутренней бирже на покупку и продажу в сети для указанного пользователя.",
                "de": "",
                "es": ""
            },
            "params": {
                "owner": {
                    "type": "String",
                    "desc": {
                        "en": "username",
                        "ru": "имя пользователя",
                        "de": "",
                        "es": ""
                    }
                },
                "pair=[\"GOLOS\", \"GBG\"]": {
                    "type": "Object",
                    "desc": {
                        "en": "array of 2 items - first and second symbol in market pair",
                        "ru": "",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_ticker": {
            "desc": {
                "en": "Returns the market ticker for the internal market",
                "ru": "Возвращает рыночный тикет для внутреннего рынка ",
                "de": "",
                "es": ""
            },
            "params": {
                "pair=[\"GOLOS\", \"GBG\"]": {
                    "type": "Object",
                    "desc": {
                        "en": "array of 2 items - first and second symbol in market pair",
                        "ru": "",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_volume": {
            "desc": {
                "en": "Returns the market volume for the past 24 hours",
                "ru": "Возвращает объем рынка за последние 24 часа",
                "de": "",
                "es": ""
            },
            "params": {
                "pair=[\"GOLOS\", \"GBG\"]": {
                    "type": "Object",
                    "desc": {
                        "en": "array of 2 items - first and second symbol in market pair",
                        "ru": "",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_order_book": {
            "desc": {
                "en": "Displays a list of applications on the internal exchange for the purchase and sale of the network",
                "ru": "Отображает список заявок на внутренней бирже на покупку и продажу в сети",
                "de": "",
                "es": ""
            },
            "params": {
                "limit": {
                    "type": "Integer",
                    "desc": {
                        "en": "number of results",
                        "ru": "количество результатов",
                        "de": "",
                        "es": ""
                    }
                },
                "pair=[\"GOLOS\", \"GBG\"]": {
                    "type": "Object",
                    "desc": {
                        "en": "array of 2 items - first and second symbol in market pair",
                        "ru": "",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_order_book_extended": {
            "desc": {
                "en": "Displays a list of applications on the internal exchange for the purchase and sale of the network",
                "ru": "Отображает список заявок на внутренней бирже на покупку и продажу в сети",
                "de": "",
                "es": ""
            },
            "params": {
                "limit": {
                    "type": "Integer",
                    "desc": {
                        "en": "number of results",
                        "ru": "количество результатов",
                        "de": "",
                        "es": ""
                    }
                },
                "pair=[\"GOLOS\", \"GBG\"]": {
                    "type": "Object",
                    "desc": {
                        "en": "array of 2 items - first and second symbol in market pair",
                        "ru": "",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_trade_history": {
            "desc": {
                "en": "Returns the trade history for the internal market.",
                "ru": "Возвращает историю торговли для внутреннего рынка",
                "de": "",
                "es": ""
            },
            "params": {
                "start": {
                    "type": "String/Integer",
                    "desc": {
                        "en": "trading start time",
                        "ru": "время начала торгов",
                        "de": "",
                        "es": ""
                    }
                },
                "end": {
                    "type": "String/Integer",
                    "desc": {
                        "en": "closing time",
                        "ru": "время окончания торгов",
                        "de": "",
                        "es": ""
                    }
                },
                "limit": {
                    "type": "Integer",
                    "desc": {
                        "en": "number of results",
                        "ru": "количество результатов",
                        "de": "",
                        "es": ""
                    }
                },
                "pair=[\"GOLOS\", \"GBG\"]": {
                    "type": "Object",
                    "desc": {
                        "en": "array of 2 items - first and second symbol in market pair",
                        "ru": "",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_recent_trades": {
            "desc": {
                "en": "Returns the N most recent trades for the internal market.",
                "ru": "Возвращает N последних сделок для внутреннего рынка",
                "de": "",
                "es": ""
            },
            "params": {
                "limit": {
                    "type": "Integer",
                    "desc": {
                        "en": "number of results",
                        "ru": "количество результатов",
                        "de": "",
                        "es": ""
                    }
                },
                "pair=[\"GOLOS\", \"GBG\"]": {
                    "type": "Object",
                    "desc": {
                        "en": "array of 2 items - first and second symbol in market pair",
                        "ru": "",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_market_history": {
            "desc": {
                "en": "Returns the market history for the internal market.",
                "ru": "Возвращает историю рынка для внутреннего рынка",
                "de": "",
                "es": ""
            },
            "params": {
                "bucket_seconds": {
                    "type": "Integer",
                    "desc": {
                        "en": "size of buckets",
                        "ru": "размер стакана(среза)",
                        "de": "",
                        "es": ""
                    }
                },
                "start": {
                    "type": "String/Integer",
                    "desc": {
                        "en": "trading start time",
                        "ru": "время начала торгов",
                        "de": "",
                        "es": ""
                    }
                },
                "end": {
                    "type": "String/Integer",
                    "desc": {
                        "en": "closing time",
                        "ru": "время окончания торгов",
                        "de": "",
                        "es": ""
                    }
                },
                "pair=[\"GOLOS\", \"GBG\"]": {
                    "type": "Object",
                    "desc": {
                        "en": "array of 2 items - first and second symbol in market pair",
                        "ru": "",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_market_history_buckets": {
            "desc": {
                "en": "Returns the bucket seconds being tracked by the plugin",
                "ru": "Возвращает размер секунд стакана(среза), отслеживаемых плагином.",
                "de": "",
                "es": ""
            }
        }
    },
    "operation_history" : {
        "get_nft_token_ops": {
            "desc": {
                "en": "Returns all operations related to specified NFT-token(-s).<br><br><b>Example:</b><pre>{ \"token_ids\": [5435], \"limit\": 1000 }</pre>",
                "ru": "Возвращает историю операций по выбранному NFT-токену(-ам).<br><br><b>Пример:</b><pre>{ \"token_ids\": [5435], \"limit\": 1000 }</pre>",
            },
            "params": {
                "query": {
                    "type": "Object",
                    "desc": {
                        "en": "<b>Example:</b><br><pre>{\n    \"token_ids\": [1243],\n    \"from\": 0,\n    \"limit\": 20\n}</pre><b>Parameters:</b><code>select_token_ids: [1, 2, 3]</code> - Token ids.<br><code>from: 0</code> - pagination. 0 - first request, 20 (if limit = 20) - second...<br><code>limit: 20</code> - max operation count in response for 1 request. Max allowed is 1000.<br><code>reverse_sort: false</code> - Reverse sorting.",
                        "ru": "<b>Пример:</b><br><pre>{\n    \"token_ids\": [1243],\n    \"from\": 0,\n    \"limit\": 20\n}</pre><b>Параметры:</b><code>select_token_ids: [1, 2, 3]</code> - Идентификаторы токенов.<br><code>from: 0</code> - пагинация. 0 - первая страница, 20 (если limit = 20) - вторая, и т.п.<br><code>limit: 20</code> - количество операций за 1 запрос. Максимум разрешено 1000.<br><code>reverse_sort: false</code> - Обратная сортировка."
                    }
                }
            }
        },
        "get_ops_in_block": {
            "desc": {
                "en": "Returns all operations in the block, if the parameter 'onlyVirtual' is true, then returns only the virtual operations",
                "ru": "Возвращает все операции в блоке, если параметр 'onlyVirtual' true то возвращает только виртуальные операции",
                "de": "",
                "es": ""
            },
            "params": {
                "blockNum": {
                    "type": "Integer",
                    "desc": {
                        "en": "block number",
                        "ru": "номер блока",
                        "de": "",
                        "es": ""
                    }
                },
                "onlyVirtual": {
                    "type": "Boolean",
                    "desc": {
                        "en": "show only virtual operations",
                        "ru": "показывать только виртуальные операции",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_transaction": {
            "desc": {
                "en": "Displays transaction details for the specified transaction ID.",
                "ru": "Отображает детали транзакции по заданному ID транзакции.",
                "de": "",
                "es": ""
            },
            "params": {
                "trxId": {
                    "type": "String",
                    "desc": {
                        "en": "id",
                        "ru": "id",
                        "de": "",
                        "es": ""
                    }
                }
            }
        }
    },
    "private_message" : {
        "get_contacts": {
            "desc": {
                "en": "Returns list of contacts of specified account.",
                "ru": "Возвращает список контактов, то есть пользователей, с которыми беседовал данный пользователь, и некоторую информацию о беседах (какое последнее сообщение, есть ли непрочитанные и т.п.). Используется в Golos Messages для панели контактов слева.",
            },
            "params": {
                "owner": {
                    "desc": {
                        "en": "Name of account for who contact list should be loaded",
                        "ru": "Имя пользователя, для которого следует получить список контактов"
                    }
                },
                "type": {
                    "desc": {
                        "en": "Currenty supported only <code>unknown</code>",
                        "ru": "На данный момент поддерживается только <code>unknown</code>"
                    }
                },
                "limit": {
                    "desc": {
                        "en": "How many contacts to return. Maximum is <b>100</b>.",
                        "ru": "Сколько контактов выдать. Гарантируемый максимум - <b>100</b>."
                    }
                },
                "offset": {
                    "desc": {
                        "en": "Pagination. For first page use <b>0</b>, another page use (N-1)*limit, there N is page number",
                        "ru": "Пагинация. Для первой страницы - <b>0</b>, для последующих страниц - (N-1)*limit, где N - номер страницы"
                    }
                }
            }
        },
        "get_inbox": {
            "desc": {
                "en": "Returns <b>incoming</b> private message history in mailbox-like style. To decode them use <a href='https://github.com/golos-blockchain/libs/blob/master/golos-lib-js/docs/files/msgs.md#%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D0%B9-%D0%BF%D1%80%D0%B8-%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%D0%B8%D0%B8-%D0%BC%D0%B5%D1%81%D1%81%D0%B5%D0%BD%D0%B4%D0%B6%D0%B5%D1%80%D0%B0-%D1%80%D0%B0%D1%81%D1%88%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D0%BA%D0%B0-%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D0%B9' target='_blank' rel='noopener nofollow'>Golos Messenger API</a>.",
                "ru": "Получает историю <b>входящих</b> сообщений в виде \"почты\". Расшифровать и безопасно обработать эти сообщения можно с помощью <a href='https://github.com/golos-blockchain/libs/blob/master/golos-lib-js/docs/files/msgs.md#%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D0%B9-%D0%BF%D1%80%D0%B8-%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%D0%B8%D0%B8-%D0%BC%D0%B5%D1%81%D1%81%D0%B5%D0%BD%D0%B4%D0%B6%D0%B5%D1%80%D0%B0-%D1%80%D0%B0%D1%81%D1%88%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D0%BA%D0%B0-%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D0%B9' target='_blank' rel='noopener nofollow'>Golos Messenger API</a>.",
                "de": "",
                "es": ""
            },
            "params": {
                "query": {
                    "type": "Object",
                    "desc": {
                        "en": "All params are optional. In simplest case just use <code>{}</code>.<ul> <li>select_accounts. List of accounts whose messages allowed in the list. Default is [], i.e. all accounts.</li> <li>filter_accounts. List of accounts whose messages are excluding from the list. Default is [].</li> <li>unread_only. Default is false.</li> <li>limit. How many messages to return. Default (and maximum) is 100.</li> <li>offset. Pagination. Default is 0, e.g. newest messages.</li> </ul>",
                        "ru": "Все параметры опциональны, в простейшем варианте достаточно <code>{}</code>. <ul><li>select_accounts. Список аккаунтов, чьи сообщения должны быть в списке. По умолчанию [], это значит все аккаунты.</li> <li>filter_accounts. Список аккаунтов, сообщений которых не должно быть всписке. По умолчанию - [].</li> <li>unread_only. true, чтобы получить только непрочитанные. По умолчанию - false.</li> <li>limit. Сколько сообщений выдать. По умолчанию и гарантируемый максимум - 100.</li> <li>offset. Пагинация. С какого сообщения (от новых к старым) выдать массив сообщений. Отсчет идет от новых к старым. По умолчанию - 0, то есть выдаются последние сообщения.</li> </ul>",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_outbox": {
            "desc": {
                "en": "Returns <b>outgoing</b> private message history in mailbox-like style. To decode them, use <a href='https://github.com/golos-blockchain/libs/blob/master/golos-lib-js/docs/files/msgs.md#%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D0%B9-%D0%BF%D1%80%D0%B8-%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%D0%B8%D0%B8-%D0%BC%D0%B5%D1%81%D1%81%D0%B5%D0%BD%D0%B4%D0%B6%D0%B5%D1%80%D0%B0-%D1%80%D0%B0%D1%81%D1%88%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D0%BA%D0%B0-%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D0%B9' target='_blank' rel='noopener nofollow'>Golos Messenger API</a>.",
                "ru": "Получает историю <b>исходящих</b> сообщений в виде \"почты\". Расшифровать и безопасно обработать эти сообщения можно с помощью <a href='https://github.com/golos-blockchain/libs/blob/master/golos-lib-js/docs/files/msgs.md#%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D0%B9-%D0%BF%D1%80%D0%B8-%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%D0%B8%D0%B8-%D0%BC%D0%B5%D1%81%D1%81%D0%B5%D0%BD%D0%B4%D0%B6%D0%B5%D1%80%D0%B0-%D1%80%D0%B0%D1%81%D1%88%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D0%BA%D0%B0-%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D0%B9' target='_blank' rel='noopener nofollow'>Golos Messenger API</a>.",
                "de": "",
                "es": ""
            },
            "params": {
                "query": {
                    "type": "Object",
                    "desc": {
                        "en": "All params are optional. In simplest case just use <code>{}</code>.<ul> <li>select_accounts. List of accounts whose messages allowed in the list. Default is [], i.e. all accounts.</li> <li>filter_accounts. List of accounts whose messages are excluding from the list. Default is [].</li> <li>unread_only. Default is false.</li> <li>limit. How many messages to return. Default (and maximum) is 100.</li> <li>offset. Pagination. Default is 0, e.g. newest messages.</li> </ul>",
                        "ru": "Все параметры опциональны, в простейшем варианте достаточно <code>{}</code>. <ul><li>select_accounts. Список аккаунтов, чьи сообщения должны быть в списке. По умолчанию [], это значит все аккаунты.</li> <li>filter_accounts. Список аккаунтов, сообщений которых не должно быть всписке. По умолчанию - [].</li> <li>unread_only. true, чтобы получить только непрочитанные. По умолчанию - false.</li> <li>limit. Сколько сообщений выдать. По умолчанию и гарантируемый максимум - 100.</li> <li>offset. Пагинация. С какого сообщения (от новых к старым) выдать массив сообщений. Отсчет идет от новых к старым. По умолчанию - 0, то есть выдаются последние сообщения.</li> </ul>",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_thread": {
            "desc": {
                "en": "Returns private message history of 2 users in chat-like style. Used in Golos Messenger. To decode them use <a href='https://github.com/golos-blockchain/libs/blob/master/golos-lib-js/docs/files/msgs.md#%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D0%B9-%D0%BF%D1%80%D0%B8-%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%D0%B8%D0%B8-%D0%BC%D0%B5%D1%81%D1%81%D0%B5%D0%BD%D0%B4%D0%B6%D0%B5%D1%80%D0%B0-%D1%80%D0%B0%D1%81%D1%88%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D0%BA%D0%B0-%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D0%B9' target='_blank' rel='noopener nofollow'>Golos Messenger API</a>.",
                "ru": "Получает историю сообщений между 2 пользователями в виде чата. Используется в Golos Messenger. Расшифровать и безопасно обработать эти сообщения можно с помощью <a href='https://github.com/golos-blockchain/libs/blob/master/golos-lib-js/docs/files/msgs.md#%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D0%B9-%D0%BF%D1%80%D0%B8-%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%D0%B8%D0%B8-%D0%BC%D0%B5%D1%81%D1%81%D0%B5%D0%BD%D0%B4%D0%B6%D0%B5%D1%80%D0%B0-%D1%80%D0%B0%D1%81%D1%88%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D0%BA%D0%B0-%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D0%B9' target='_blank' rel='noopener nofollow'>Golos Messenger API</a>.",
                "de": "",
                "es": ""
            },
            "params": {
                "from": {
                    "desc": {
                        "en": "Account name of one of 2 users.",
                        "ru": "Имя аккаунта одного из собеседников. Рекомендуется подставлять сюда текущего авторизованного пользователя, а в <code>to</code> - его собеседника." 
                    }
                },
                "to": {
                    "desc": {
                        "en": "Another one.",
                        "ru": "Имя аккаунта второго собеседника." 
                    }
                },
                "query": {
                    "type": "Object",
                    "desc": {
                        "en": "All params are optional. In simplest case just use <code>{}</code>.<ul> <li>unread_only. Default is false.</li> <li>limit. How many messages to return. Default is 100, maximum is 1000.</li> <li>offset. Pagination. Default is 0, e.g. newest messages.</li> </ul>",
                        "ru": "Все параметры опциональны, в простейшем варианте достаточно <code>{}</code>. <ul><li>unread_only. true, чтобы получить только непрочитанные. По умолчанию - false.</li> <li>limit. Сколько сообщений выдать. По умолчанию - 100, гарантируемый максимум - 1000.</li> <li>offset. Пагинация. С какого сообщения (от новых к старым) выдать массив сообщений. Отсчет идет от новых к старым. По умолчанию - 0, то есть выдаются последние сообщения.</li> </ul>",
                        "de": "",
                        "es": ""
                    }
                }
            }
        }
    },
    "social_network" : {
        "get_all_content_replies": {
            "desc": {
                "en": "",
                "ru": "",
                "de": "",
                "es": ""
            },
            "params": {
                "filterIds=[]": {
                    "type": "Object",
                    "desc": {
                        "en": "",
                        "ru": "",
                        "de": "",
                        "es": ""
                    }
                },
                "filterAuthors=[]": {
                    "type": "Object",
                    "desc": {
                        "en": "",
                        "ru": "",
                        "de": "",
                        "es": ""
                    }
                },
                "sortByCreatedDesc=null": {
                    "type": "Object",
                    "desc": {
                        "en": "",
                        "ru": "",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_active_votes": {
            "desc": {
                "en": "Displays the list of users who voted for the specified entry",
                "ru": "Отображает список пользователей проголосовавших за указанную запись",
                "de": "",
                "es": ""
            },
            "params": {
                "author": {
                    "type": "String",
                    "desc": {
                        "en": "username (author of the publication)",
                        "ru": "имя пользователя (автора публикации)",
                        "de": "",
                        "es": ""
                    }
                },
                "permlink": {
                    "type": "String",
                    "desc": {
                        "en": "link to publication",
                        "ru": "ссылка на публикацию",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_account_votes": {
            "desc": {
                "en": "Displays all the voices that are displayed by the specified user",
                "ru": "Отображает все голоса которые выставлены указанным пользователем",
                "de": "",
                "es": ""
            },
            "params": {
                "voter": {
                    "type": "String",
                    "desc": {
                        "en": "username",
                        "ru": "имя пользователя",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_content": {
            "desc": {
                "en": "Gets information about the publication, with the exception of comments",
                "ru": "Получает информацию о публикации, за исключением комментариев",
                "de": "",
                "es": ""
            },
            "params": {
                "author": {
                    "type": "String",
                    "desc": {
                        "en": "username",
                        "ru": "имя пользователя",
                        "de": "",
                        "es": ""
                    }
                },
                "permlink": {
                    "type": "String",
                    "desc": {
                        "en": "link to publication",
                        "ru": "ссылка на публикацию",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_content_replies": {
            "desc": {
                "en": "Displays a list of all comments for the selected publication",
                "ru": "Отображает список всех комментариев для выбранной публикации",
                "de": "",
                "es": ""
            },
            "params": {
                "author": {
                    "type": "String",
                    "desc": {
                        "en": "username",
                        "ru": "имя пользователя",
                        "de": "",
                        "es": ""
                    }
                },
                "parentPermlink": {
                    "type": "String",
                    "desc": {
                        "en": "link to publication",
                        "ru": "ссылка на публикацию",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_donates": {
            "desc": {
                "en": "Returns a list (array) of donates of specified target (post, comment, etc.), or sent by specified user (<code>from</code>), or received by specified user (<code>to</code>).<br><br>In target case this method is good for single post or comment. If loading donate lists for whole comment tree, it is better to use <code>get_donates_for_targets</code>.",
                "ru": "Выдает список (массив) донатов, полученных за заданный target (пост, комментарий и др.), или отправленных заданным пользователем (<code>from</code>), или полученных заданных пользователем (<code>to</code>).<br><br>В случае с target метод хорош для загрузки донатов под постом или одиночным комментарием. Если загружается дерево комментариев, и для каждого нужно загрузить список донатов, то оптимальнее использовать <code>get_donates_for_targets</code>.",
                "de": "",
                "es": ""
            },
            "params": {
                "uia": {
                    "type": "Object",
                    "desc": {
                        "en": "true for array of only UIA-donates. false for only GOLOS-donates.",
                        "ru": "true, если нужен массив донатов только в UIA. false, если нужен список донатов только в токенах GOLOS.",
                        "de": "",
                        "es": ""
                    }
                },
                "target": {
                    "type": "Object",
                    "desc": {
                        "en": "JSON-object with any field structure. Each application has its own target structure.<br>In case with Golos Blogs' and Forums' posts and comments, target contains 2 fields - <code>author</code> and <code>permlink</code>.<br>Example: <code>{\"author\":\"lex\",\"permlink\":\"zayavka-za-podgotovku-koordinaciyu-testirovanie-i-realizaciyu-23-khf\"}</code>",
                        "ru": "JSON-объект произвольной структуры. У каждого приложения (и в каждой разновидности target) структура своя.<br>В случае с постами и комментариями, созданными через Golos Блоги или Форум, объект содержит два поля - <code>author</code> и <code>permlink</code>.<br>Пример: <code>{\"author\":\"lex\",\"permlink\":\"zayavka-za-podgotovku-koordinaciyu-testirovanie-i-realizaciyu-23-khf\"}</code>",
                        "de": "",
                        "es": ""
                    }
                },
                "from": {
                    "type": "String",
                    "desc": {
                        "en": "Fill it only in case if you want to obtain donates sent by specific user, not for specific target. In that case target should be set to null.",
                        "ru": "Заполняется только в случае, когда нужно получить не список донатов под каким-то target, а список донатов от какого-то пользователя за любые target. target в этом случае должен быть <code>null</code>.",
                        "de": "",
                        "es": ""
                    }
                },
                "to": {
                    "type": "String",
                    "desc": {
                        "en": "Fill it only in case if you want to obtain donates received by specific user, not for specific target. In that case target should be set to null.",
                        "ru": "Заполняется только в случае, когда нужно получить не список донатов под каким-то target, а список донатов какому-то пользователю за любые target. target в этом случае должен быть <code>null</code>.",
                        "de": "",
                        "es": ""
                    }
                },
                "limit": {
                    "type": "Object",
                    "desc": {
                        "en": "How much donates we should obtain. Maximum - 100.<br>Recommended for best performance - <b>20</b>.<br>If there are many donates, you should use pagination - firstly load first 100 donates (set <code>offset</code> to 0), next use \"load-more\" pattern, with incrementing <code>offset</code> each time.",
                        "ru": "Сколько донатов получить.<br> Гарантируемый максимум - 100.<br>Рекомендуется для быстродействия - <b>20</b>.<br>Если донатов много, то нужно использовать load-more-пагинацию - сначала загрузить первые 100 (с <code>offset</code> 0), а затем по мере перелистывания пользователем подгружать еще порции, увеличивая <code>offset</code> каждый раз.",
                        "de": "",
                        "es": ""
                    }
                },
                "offset": {
                    "type": "Object",
                    "desc": {
                        "en": "Pagination. To receive first page, use <b>0</b>. See <code>limit</code>.",
                        "ru": "Пагинация. Для получения самой первой страницы списка используйте <b>0</b>. См. <code>limit</code>.",
                        "de": "",
                        "es": ""
                    }
                },
                "join_froms": {
                    "type": "Object",
                    "desc": {
                        "en": "true, if we should join each few donates by single user and single symbol into single donate. false, if not. Usually <b>true</b> is better choice.",
                        "ru": "true, если нужно объединять несколько донатов от одного пользователя в одной валюте - в один донат. false, если этого делать не нужно. Обычно удобнее <b>true</b>.",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_donates_for_targets": {
            "desc": {
                "en": "Gets the few lists of donates of few specified targets (posts, comments, etc.)<br><br>Response is array of arrays. For each target it contains 2 arrays: GOLOS-donates and UIA-donates.",
                "ru": "Возвращает несколько списков донатов, полученных за несколько target (посты, комментарии и др.)<br><br>Возвращаемое значение - массив из массивов. На каждый target - по 2 массива, из которых первый - это донаты в токенах GOLOS, второй - донаты в токенах UIA.",
                "de": "",
                "es": ""
            },
            "params": {
                "targets": {
                    "type": "Object",
                    "desc": {
                        "en": "Array of targets.<br><br>Target is a JSON-object with any field structure. Each application has its own target structure.<br>In case with Golos Blogs' and Forums' posts and comments, target contains 2 fields - <code>author</code> and <code>permlink</code>.<br><br>Example: <code>[{\"author\":\"lex\",\"permlink\":\"zayavka-za-podgotovku-koordinaciyu-testirovanie-i-realizaciyu-23-khf\"}, {\"author\":\"lex-escrow\",\"permlink\":\"zayavka-za-vzaimodeistvie-s-birzhami-voprosam-listinga-reitingov\"}]</code>",
                        "ru": "Массив target'ов.<br><br>Каждый target - это JSON-объект произвольной структуры. У каждого приложения (и в каждой разновидности target) структура своя.<br>В случае с постами и комментариями, созданными через Golos Блоги или Форум, объект содержит два поля - <code>author</code> и <code>permlink</code>.<br><br>Пример: <code>[{\"author\":\"lex\",\"permlink\":\"zayavka-za-podgotovku-koordinaciyu-testirovanie-i-realizaciyu-23-khf\"}, {\"author\":\"lex-escrow\",\"permlink\":\"zayavka-za-vzaimodeistvie-s-birzhami-voprosam-listinga-reitingov\"}]</code>",
                        "de": "",
                        "es": ""
                    }
                },
                "limit": {
                    "type": "Object",
                    "desc": {
                        "en": "How much donates we should obtain. Maximum - 100.<br>Recommended for best performance - <b>20</b>.<br>If there are many donates, you should use pagination - firstly load first 100 donates (set <code>offset</code> to 0), next use \"load-more\" pattern, with incrementing <code>offset</code> each time.",
                        "ru": "Сколько донатов получить.<br> Гарантируемый максимум - 100.<br>Рекомендуется для быстродействия - <b>20</b>.<br>Если донатов много, то нужно использовать load-more-пагинацию - сначала загрузить первые 100 (с <code>offset</code> 0), а затем по мере перелистывания пользователем подгружать еще порции, увеличивая <code>offset</code> каждый раз.",
                        "de": "",
                        "es": ""
                    }
                },
                "offset": {
                    "type": "Object",
                    "desc": {
                        "en": "Pagination. To receive first page, use <b>0</b>. See <code>limit</code>.",
                        "ru": "Пагинация. Для получения самой первой страницы списка используйте <b>0</b>. См. <code>limit</code>.",
                        "de": "",
                        "es": ""
                    }
                },
                "join_froms": {
                    "type": "Object",
                    "desc": {
                        "en": "true, if we should join each few donates by single user and single symbol into single donate. false, if not. Usually <b>true</b> is better choice.",
                        "ru": "true, если нужно объединять несколько донатов от одного пользователя в одной валюте - в один донат. false, если этого делать не нужно. Обычно удобнее <b>true</b>.",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_discussions_by_author_before_date": {
            "desc": {
                "en": "Displays a limited number of user publications",
                "ru": "Отображает ограниченное количество публикации пользователя",
                "de": "",
                "es": ""
            },
            "params": {
                "author": {
                    "type": "String",
                    "desc": {
                        "en": "username",
                        "ru": "имя пользователя",
                        "de": "",
                        "es": ""
                    }
                },
                "startPermlink": {
                    "type": "String",
                    "desc": {
                        "en": "link to the publication from which to start filtering (may be empty)",
                        "ru": "ссылка на публикацию с которой начинать фильтровать (может быть пустым)",
                        "de": "",
                        "es": ""
                    }
                },
                "beforeDate": {
                    "type": "String",
                    "desc": {
                        "en": "date to which to filter",
                        "ru": "дата до которой фильтровать",
                        "de": "",
                        "es": ""
                    }
                },
                "limit": {
                    "type": "Integer",
                    "desc": {
                        "en": "number of results",
                        "ru": "количество результатов",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_replies_by_last_update": {
            "desc": {
                "en": "Return the active discussions with the highest cumulative pending payouts without respect to category, total  pending payout means the pending payout of all children as well.",
                "ru": "Верните активные обсуждения с самыми высокими совокупными ожидающими выплатами без учета категории, общая ожидаемая выплата означает ожидаемую всю выплату.",
                "de": "",
                "es": ""
            },
            "params": {
                "startAuthor": {
                    "type": "String",
                    "desc": {
                        "en": "username",
                        "ru": "имя пользователя",
                        "de": "",
                        "es": ""
                    }
                },
                "startPermlink": {
                    "type": "String",
                    "desc": {
                        "en": "link to publication",
                        "ru": "ссылка на публикацию",
                        "de": "",
                        "es": ""
                    }
                },
                "limit": {
                    "type": "Integer",
                    "desc": {
                        "en": "number of results",
                        "ru": "количество результатов",
                        "de": "",
                        "es": ""
                    }
                }
            }
        }
    },
    "witness_api" : {
        "get_witnesses": {
            "desc": {
                "en": "Displays delegate data according to the specified ID",
                "ru": "Отображает данные о делегатах в соответствии с заданными ID",
                "de": "",
                "es": ""
            },
            "params": {
                "witnessIds": {
                    "type": "Array",
                    "desc": {
                        "en": "id",
                        "ru": "id",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_witness_by_account": {
            "desc": {
                "en": "Displays data about the delegate (if it is) according to the data from the request",
                "ru": "Отображает данные о делегате (если он им является) в соответствии с данными из запроса",
                "de": "",
                "es": ""
            },
            "params": {
                "accountName": {
                    "type": "String",
                    "desc": {
                        "en": "username",
                        "ru": "имя пользователя",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_witnesses_by_vote": {
            "desc": {
                "en": "Displays a limited list of delegates approving the vote.",
                "ru": "Отображает ограниченный список делегатов одобряющих голосование.",
                "de": "",
                "es": ""
            },
            "params": {
                "from": {
                    "type": "String",
                    "desc": {
                        "en": "username (If the first parameter is empty, the leading delegates are displayed, if the first parameter is specified, the list starts with the specified delegate.)",
                        "ru": "имя пользователя (Если первый параметр пуст то отображаются ведущие делегаты, если первый параметр указан то список начинается с указанного делегата.)",
                        "de": "",
                        "es": ""
                    }
                },
                "limit": {
                    "type": "Integer",
                    "desc": {
                        "en": "number of results",
                        "ru": "количество результатов",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "lookup_witness_accounts": {
            "desc": {
                "en": "Displays a limited list of users who have announced their intention to work as a delegate.",
                "ru": "Отображает ограниченный список пользователей, которые объявили о своем намерении работать в качестве делегата.",
                "de": "",
                "es": ""
            },
            "params": {
                "lowerBoundName": {
                    "type": "String",
                    "desc": {
                        "en": "search pattern",
                        "ru": "шаблон поиска",
                        "de": "",
                        "es": ""
                    }
                },
                "limit": {
                    "type": "Integer",
                    "desc": {
                        "en": "number of results",
                        "ru": "количество результатов",
                        "de": "",
                        "es": ""
                    }
                }
            }
        },
        "get_witness_count": {
            "desc": {
                "en": "Displays the number of delegates.",
                "ru": "Отображает количество делегатов.",
                "de": "",
                "es": ""
            }
        },
        "get_current_median_history_price": {
            "desc": {
                "en": "Displays the current median price of conversion",
                "ru": "Отображает текущую медианную цену конвертации",
                "de": "",
                "es": ""
            }
        },
        "get_witness_schedule": {
            "desc": {
                "en": "Displays the current delegation status.",
                "ru": "Отображает текущее состояние делегирования.",
                "de": "",
                "es": ""
            }
        },
        "get_active_witnesses": {
            "desc": {
                "en": "Displays a list of all active delegates.",
                "ru": "Отображает список всех активных делегатов.",
                "de": "",
                "es": ""
            }
        },
        "get_miner_queue": {
            "desc": {
                "en": "Creates a list of the miners waiting to enter the DPOW chain to create the block.",
                "ru": "Создает список майнеров, ожидающих попасть в DPOW цепочку, чтобы создать блок.",
                "de": "",
                "es": ""
            }
        }
    },
    "worker_api" : {
        "get_worker_requests": {
            "desc": {
                "en": "Gets list of worker requests (or only one request).",
                "ru": "",
                "de": "",
                "es": ""
            },
            "params": {
                "query": {
                    "type": "Object",
                    "desc": {
                        "en": "",
                        "ru": "",
                        "de": "",
                        "es": ""
                    }
                },
                "sort": {
                    "desc": {
                        "en": "by_created, by_net_rshares, by_upvotes, or by_downvotes",
                        "ru": "",
                        "de": "",
                        "es": ""
                    }
                },
                "fill_post": {
                    "type": "Boolean"
                }
            }
        }
    },
    "paid_subscription_api" : {
        "get_paid_subscribe": {
            "desc": {
                "en": "Returns paid subscribe if exists. Or object with empty fields.<br><br><b>Example:</b><br>query:<br><pre>{ \"author\": \"lex\", \"oid\": { \"app\": \"golos-blog\", \"name\": \"blog\", \"version\": 1 }, \"subscriber\": \"xel\" }</pre>",
                "ru": "Возвращает платную подписку пользователя **subscriber** на такую-то сущность `oid` для подписки пользователя <code>author</code>. Если подписки нет, возвращает объект с пустыми полями.<br><br><b>Пример:</b><br>query:<br><pre>{ \"author\": \"lex\", \"oid\": { \"app\": \"golos-blog\", \"name\": \"blog\", \"version\": 1 }, \"subscriber\": \"xel\" }</pre>",
            },
            "params": {
                "query={}": {
                    "type": "Object",
                    "desc": {
                        "en": "<b>Parameters:</b><br><code>author: 'lex'</code> - paid subscribe author.<br><code>oid: { app: 'golos-blog', name: 'blog', version: 1 }</code> - paid subscribe id.<br><code>subscriber: 'xel'</code> - Subscriber.",
                        "ru": "<b>Параметры:</b><br><code>author: 'lex'</code> - автор платной подписки.<br><code>oid: { app: 'golos-blog', name: 'blog', version: 1 }</code> - идентификатор платной подписки.<br><code>subscriber: 'xel'</code> - Предполагаемый платный подписчик"
                    }
                }
            }
        },
        "get_paid_subscribers": {
            "desc": {
                "en": "Returns list of paid subscibers if <code>oid</code> by <code>author</code>. If no - returns empty array.<br><br><b>Example:</b><br>query:<br><pre>{ \"author\": \"lex\", \"oid\": { \"app\": \"golos-blog\", \"name\": \"blog\", \"version\": 1 }, \"limit\": 100 }</pre>",
                "ru": "Возвращает список платных подписчиков заданной сущности <code>oid</code> для подписки пользователя <code>author</code>. Если подписок нет, возвращает пустой массив.<br><br><b>Пример:</b><br>query:<br><pre>{ \"author\": \"lex\", \"oid\": { \"app\": \"golos-blog\", \"name\": \"blog\", \"version\": 1 }, \"limit\": 100 }</pre>",
            },
            "params": {
                "query={}": {
                    "type": "Object",
                    "desc": {
                        "en": "<b>Parameters:</b><br><code>author: 'lex'</code> - author.<br><code>oid: { app: 'golos-blog', name: 'blog', version: 1 }</code> - id of paid subscription.<br><code>from: ''</code> - Pagination. First request - empty string, next - name of last subscriber from previous request response.<br><code>limit: 20</code> - Max paid subscribers count per request. Max allowed is 100.<br><code>sort: 'by_name'</code> - Sorting. by_date<br><code>state: 'active_inactive'</code> - Get active and inactive subscribers. active_only, inactive_only",
                        "ru": "<b>Параметры:</b><br><code>author: 'lex'</code> - автор платной подписки.<br><code>oid: { app: 'golos-blog', name: 'blog', version: 1 }</code> - идентификатор платной подписки.<br><code>from: ''</code> - Пагинация. При первом запросе пустая строка, далее - имя последнего подписчика из предыдущего запроса.<br><code>limit: 20</code> - Макс. кол-во платных подписок за 1 запрос. Разрешено максимум 100.<br><code>sort: 'by_name'</code> - Сортировка. by_date<br><code>state: 'active_inactive'</code> - Получать как активных, так и неактивных подписчиков. active_only, inactive_only"
                    }
                }
            }
        },
        "get_paid_subscription_options": {
            "desc": {
                "en": "Returns paid subscription if exists. Or object with empty fields.<br><br><b>Example:</b><br>query:<br><pre>{ \"author\": \"lex\", \"oid\": { \"app\": \"golos-blog\", \"name\": \"blog\", \"version\": 1 } }</pre>",
                "ru": "Возвращает информацию об условиях платной подписки <code>oid</code> автора <code>author</code>. Если подписки нет, возвращает объект с пустыми полями.<br><br><b>Пример:</b><br>query:<br><pre>{ \"author\": \"lex\", \"oid\": { \"app\": \"golos-blog\", \"name\": \"blog\", \"version\": 1 } }</pre>",
            },
            "params": {
                "query={}": {
                    "type": "Object",
                    "desc": {
                        "en": "<b>Parameters:</b><br><code>author: 'lex'</code> - paid subscribe author.<br><code>oid: { app: 'golos-blog', name: 'blog', version: 1 }</code> - paid subscribe id.",
                        "ru": "<b>Параметры:</b><br><code>author: 'lex'</code> - автор платной подписки.<br><code>oid: { app: 'golos-blog', name: 'blog', version: 1 }</code> - идентификатор платной подписки."
                    }
                }
            }
        },
        "get_paid_subscriptions": {
            "desc": {
                "en": "Returns paid subscribes of <code>subscriber</code> user. If no - returns empty array.<br><br><b>Example:</b><br>query:<br><pre>{ \"subscriber\": \"lex\", \"limit\": 100, \"select_oid\": { \"app\": \"golos-blog\", \"name\": \"blog\", \"version\": 1 } }</pre>",
                "ru": "Возвращает список платных подписок пользователя <code>subscriber</code> (\"на что я подписан?\"). Если подписок нет, возвращает пустой массив.<br><br><b>Пример:</b><br>query:<br><pre>{ \"subscriber\": \"lex\", \"limit\": 100, \"select_oid\": { \"app\": \"golos-blog\", \"name\": \"blog\", \"version\": 1 } }</pre>",
            },
            "params": {
                "query={}": {
                    "type": "Object",
                    "desc": {
                        "en": "<b>Parameters:</b><br><code>subscriber: 'lex'</code> - subscriber.<br><code>start_author: ''</code> - Pagination. 1st request - empty, next - author of last subscribe in previous response.<br><code>start_oid: { app: '', name: '', version: 1 }</code> - also need for pagination. In this example - empty, for first request.<br><code>limit: 20</code> - Max subscribes count for 1 request. Maximum is 100.<br><code>sort: 'by_author_id'</code> - Sorting. by_date<br><code>state: 'active_inactive'</code> - State of subscribes. active_only, inactive_only<br><code>select_items: [['alice', {app: 'test', name: 'test', version: 1}]]</code> - Get only specified subscribes.<br><code>select_oid</code> - Get subscribes with this oid, but different authors (e.g. all sponsored authors in Golos Blogs are have same oid)",
                        "ru": "<b>Параметры:</b><br><code>subscriber: 'lex'</code> - подписчик.<br><code>start_author: ''</code> - Пагинация. Первый запрос - пусто, далее - автор последней подписки из предыдущего запроса.<br><code>start_oid: { app: '', name: '', version: 1 }</code> - также необходимо для пагинации. В данном примере - пустое, для первого запроса.<br><code>limit: 20</code> - Макс. кол-во подписок за 1 запрос. Максимум 100.<br><code>sort: 'by_author_id'</code> - Сортировка. by_date<br><code>state: 'active_inactive'</code> - Статус подписок. active_only, inactive_only<br><code>select_items: [['alice', {app: 'test', name: 'test', version: 1}]]</code> - Позволяет получать конкретные подписки.<br><code>select_oid</code> - Позволяет получать подписки на конкретный oid, но разных авторов (напр. у всех спонсируемых авторов в Golos Blogs один и тот же oid_"
                    }
                }
            }
        },
        "get_paid_subscriptions_by_author": {
            "desc": {
                "en": "Returns paid subscriptions by <code>author</code>, or empty array.<br><br><b>Пример:</b><br>query:<br><pre>{ \"author\": \"lex\", \"limit\": 100 }</pre>",
                "ru": "Получает платные подписки автора <code>author</code>. Если подписок нет - пустой массив.<br><br><b>Пример:</b><br>query:<br><pre>{ \"author\": \"lex\", \"limit\": 100 }</pre>",
            },
            "params": {
                "query={}": {
                    "type": "Object",
                    "desc": {
                        "en": "<b>Parameters:</b><br><code>author: 'lex'</code> - paid subscriptions author.<br><code>from: { app: '', name: '', version: 1 }</code> - pagination. First request - empty as in this example. Next - oid of last subscription of previous request.<br><code>limit: 20</code> - Max count per request. Allowed maximum is 100",
                        "ru": "<b>Параметры:</b><br><code>author: 'lex'</code> - автор платных подписок.<br><code>from: { app: '', name: '', version: 1 }</code> - пагинация. При первом запросе оставить пустым как в данном примере. Далее - oid последней подписки из предыдущего запроса.<br><code>limit: 20</code> - Макс. кол-во платных подписок в одном ответе. Допустимый максимум 100"
                    }
                }
            }
        },
    },
    "nft_api" : {
        "get_nft_collections": {
            "desc": {
                "en": "Returns list of all NFT-collections, or specified one/ones, or collections by specified creator.<br><br><b>All collections:</b><br>query: <pre>{ \"limit\": 100 }</pre><br><b>Collections of specified creator:</b><br><pre>{ \"creator\": \"lex\", \"limit\": 100 }</pre><br><b>Specified collections:</b><br><pre>{ \"select_names\": [\"CATS\", \"DOGS\"] }</pre>",
                "ru": "Возвращает список всех NFT-коллекций в системе, либо выбранную коллекцию/коллекции, либо коллекции выбранного владельца.<br><br><b>Все коллекции:</b><br>query: <pre>{ \"limit\": 100 }</pre><br><b>Коллекции конкретного владельца:</b><br><pre>{ \"creator\": \"lex\", \"limit\": 100 }</pre><br><b>Конкретные коллекции:</b><br><pre>{ \"select_names\": [\"CATS\", \"DOGS\"] }</pre>",
            },
            "params": {
                "query={}": {
                    "type": "Object",
                    "desc": {
                        "en": "<b>Parameters:</b><br><code>creator: 'cyberfounder'</code> - select collections only by this owner. Can be empty.<br><code>start_name: ''</code> - pagination. Collection name from which start the list. First request - it is empty. Next requests - it is name of last collection of previous request.<br><code>limit: 20</code> - Max count of collections for single request. Maximum allowed if 100.<br><code>sort: 'by_created'</code> Sorting of NFT-collections. by_last_price, by_token_count, by_market_depth, by_market_asks, by_market_volume<br><code>reverse_sort: false</code> - Reverse sort.",
                        "ru": "<b>Параметры:</b><br><code>creator: 'cyberfounder'</code> - выбрать коллекции этого владельца. Оставьте пустым, если нужны любые коллекции.<br><code>start_name: ''</code> - пагинация. Имя коллекции, с которой следует начать выборку. При первом запросе должен быть пустым, а при каждом последующем - имя последней коллекции из предыдущего запроса.<br><code>limit: 20</code> - Макс. кол-во коллекций за 1 запрос. Максимум 100.<br><code>sort: 'by_created'</code> Сортировка коллекций. by_last_price, by_token_count, by_market_depth, by_market_asks, by_market_volume<br><code>reverse_sort: false</code> - Сортировать в обратном направлении."
                    }
                }
            }
        },
        "get_nft_orders": {
            "desc": {
                "en": "Returns list of all NFT-orders (selling or buying NFT-tokens), or orders by  specified owner, or orders in specified NFT-collection, or 1 specified order by <code>order_id</code>.<br><br><b>All CATS orders:</b><br>query: <pre>{ \"select_collections\": [\"CATS\"], \"limit\": 100 }</pre><br><b>Orders by owner:</b><br><pre>{ \"owner\": \"lex\", \"select_collections\": [\"CATS\"], \"limit\": 100 }</pre><br><b>Specified order:</b><br><pre>{ \"start_order_id\": 543, \"limit\": 1 }</pre>",
                "ru": "Возвращает список всех NFT-ордеров в системе (ордеров на продажу/покупку NFT-токенов), либо ордера заданного владельца токенов, либо ордера NFT-токенов заданной коллекции, либо 1 конкретный ордер по <code>order_id</code>.<br><br><b>Все ордеры с токенами CATS:</b><br>query: <pre>{ \"select_collections\": [\"CATS\"], \"limit\": 100 }</pre><br><b>Ордеры конкретного владельца:</b><br><pre>{ \"owner\": \"lex\", \"select_collections\": [\"CATS\"], \"limit\": 100 }</pre><br><b>Конкретный ордер:</b><br><pre>{ \"start_order_id\": 543, \"limit\": 1 }</pre>",
            },
            "params": {
                "query={}": {
                    "type": "Object",
                    "desc": {
                        "en": "<b>Parameters:</b><br><code>owner: 'alice'</code> - get orders only by this owner. Can be empty.<br><code>start_order_id: 0</code> - pagination. 0 if first request, every next request - order_id from last order from previous request.<br><code>limit: 20</code> - Pagination. Max order count per 1 request. Max allowed is 100.<br><code>select_collections: []</code> - select orders only from these collections.<br><code>collection_limit: 1</code> - Select only 1 order from each select_collections.<br><code>filter_creators: []</code> - Ignore orders from collections by these creators.<code>filter_owners: []</code> - Ignore orders by these order owners. <code>filter_token_ids: []</code> - Filter ID of tokens to ignore.<code>filter_names: []</code> - Collection names to ignore orders of them.<br><code>filter_order_ids: []</code> - id orders to ignore.<br><code>type: 'selling'</code> - only selling. Or <code>'buying'</code> - only buying, <code>'both'</code> - any.<br><code>sort: 'by_name'</code> - Sorting. by_created, by_price<br><code>reverse_sort: false</code> - Reversed order of sorting.",
                        "ru": "<b>Параметры:</b><br><code>owner: 'alice'</code> - получить ордеры только этого владельца. Может быть пустым.<br><code>start_order_id: 0</code> - пагинация. 0 при первом запросе, при каждом последующем - order_id последнего ордера из предыдущего запроса.<br><code>limit: 20</code> - Пагинация. Макс. кол-во ордеров за 1 запрос. Максимум 100.<br><code>select_collections: []</code> - выбирает ордера только из этих коллекций.<br><code>collection_limit: 1</code> - Задается, если из каждой коллекции (select_collections) нужно выбрать только 1 ордер.<br><code>filter_creators: []</code> - Владельцы коллекций, чьи ордеры следует исключить из списка.<code>filter_owners: []</code> - Владельцы токенов, чьи ордеры следует исключить из списка. <code>filter_token_ids: []</code> - ID токенов, которые следует исключить из списка.<code>filter_names: []</code> - Имена коллекций, ордеры из которых следует исключить из списка.<br><code>filter_order_ids: []</code> - id ордеров, которые следует исключить из списка.<br><code>type: 'selling'</code> - ордера только на продажу. Или <code>'buying'</code> - только на покупку, <code>'both'</code> - любые.<br><code>sort: 'by_name'</code> - Сортировка. by_created, by_price<br><code>reverse_sort: false</code> - Reversed order of sorting."
                    }
                }
            }
        },
        "get_nft_tokens": {
            "desc": {
                "en": "Returns list of all NFT-tokens, or tokens by specified tokens owner, or tokens from specified collection, or specified tokens.",
                "ru": "Возвращает список всех NFT-токенов в системе, либо токены заданного владельца токенов, либо токены из заданной коллекции, либо конкретные токены по id.<br><br><b>Все токены CATS:</b><br>query: <pre>{ \"select_collections\": [\"CATS\"], \"limit\": 100 }</pre><br><b>Все токены владельца:</b><pre>{ \"owner\": \"lex\", \"limit\": 100 }</pre>",
            },
            "params": {
                "query={}": {
                    "type": "Object",
                    "desc": {
                        "en": "<b>Parameters:</b><br><code>owner: 'alice'</code> - get tokens only of specified owner. Can be empty.<br><code>start_token_id: 0</code> - pagination. 0 if first request, every next - token_id of last token of previous request.<br><code>limit: 20</code> - Pagination. Max token count per 1 request. Max is 100.<br><code>select_collections: []</code> - select tokens only from these collections.<br><code>collection_limit: 1</code> - Select only 1 token from each of select_collections.<br><code>select_token_ids: []</code> - Select only specified tokens by token_id.<br><code>filter_creators: []</code> - Ignore tokens from collections by these creators.<code>filter_token_ids: []</code> - ID of tokens to ignore.<code>filter_names: []</code> - Collection names to ignore tokens from them.<br><code>state: 'any_not_burnt'</code> - All tokens excluding burnt ones. 'selling_one' - only selling tokens, or 'not_selling_one' - only not selling tokens; 'burnt_only', 'any'<br><code>sort: 'by_name'</code> - Sorting. by_issued, by_last_update, by_last_price<br><code>reverse_sort: false</code> - Reverse order of sorting.<br><code>illformed: 'sort_down'</code> - Sort down tokens without title/image. 'nothing', 'ignore'<br><code>selling_sorting: 'nothing'</code> - Do not sort up selling tokens. 'sort_up', 'sort_up_by_price'<br><code>sorting_priority: 'selling'</code> Or illformed. Which of these sortings is more important.",
                        "ru": "<b>Параметры:</b><br><code>owner: 'alice'</code> - получить токены только этого владельца. Может быть пустым.<br><code>start_token_id: 0</code> - пагинация. 0 при первом запросе, при каждом последующем - token_id последнего токена из предыдущего запроса.<br><code>limit: 20</code> - Пагинация. Макс. кол-во токенов за 1 запрос. Максимум 100.<br><code>select_collections: []</code> - выбирает токены только из этих коллекций.<br><code>collection_limit: 1</code> - Задается, если из каждой коллекции (select_collections) нужно выбрать только 1 токен.<br><code>select_token_ids: []</code> - Выбрать только конкретные токены по token_id.<br><code>filter_creators: []</code> - Владельцы коллекций, чьи токены следует исключить из списка.<br><code>filter_token_ids: []</code> - ID токенов, которые следует исключить из списка.<br><code>filter_names: []</code> - Имена коллекций, токены из которых следует исключить из списка.<br><code>state: 'any_not_burnt'</code> - Получить все токены, кроме сожженных. 'selling_one' - только токены которые выставлены на продажу, или 'not_selling_one' - только которые не выставлены; 'burnt_only', 'any'<br><code>sort: 'by_name'</code> - Сортировка. by_issued, by_last_update, by_last_price<br><code>reverse_sort: false</code> - Обратный порядок сортировки.<br><code>illformed: 'sort_down'</code> - Отображать в самом конце токены у которых нет заголовка/картинки. 'nothing', 'ignore'<br><code>selling_sorting: 'nothing'</code> - Не выдавать токены, которые сейчас продаются, впереди всех остальных. 'sort_up', 'sort_up_by_price'<br><code>sorting_priority: 'selling'</code> Или illformed. Какая из этих сортировок приоритетна. То есть если у токена нет картинки, но он продается, то все равно выводить его первее других."
                    }
                }
            }
        }
    }
}
