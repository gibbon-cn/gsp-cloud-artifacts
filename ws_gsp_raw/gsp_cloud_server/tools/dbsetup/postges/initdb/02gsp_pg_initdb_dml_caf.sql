
DELETE FROM ECPLanguage where id = 'zh-CHS';
Insert into ECPLanguage (ID,CODE,NAME,FIELDSUFFIX,SORTORDER,ENABLED,SYSINIT,DESCRIPTION,LASTMODIFIEDTIME)
values
('zh-CHS','zh-CHS','简体中文', 'CHS', 0, TRUE, TRUE, '简体中文', now());

DELETE FROM ECPLanguage where id = 'en';
Insert into ECPLanguage (ID,CODE,NAME,FIELDSUFFIX,SORTORDER,ENABLED,SYSINIT,DESCRIPTION,LASTMODIFIEDTIME)
values
('en','en','英文', 'EN',1 ,TRUE, TRUE, '英文', now());


DELETE FROM ECPLangCodeDict;
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'af', N'af', N'南非荷兰语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'af-ZA', N'af-ZA', N'南非荷兰语 - 南非');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'ar', N'ar', N'阿拉伯语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'ar-AE', N'ar-AE', N'阿拉伯语 - 阿拉伯联合酋长国');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'ar-BH', N'ar-BH', N'阿拉伯语 - 巴林');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'ar-DZ', N'ar-DZ', N'阿拉伯语 - 阿尔及利亚');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'ar-EG', N'ar-EG', N'阿拉伯语 - 埃及');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'ar-IQ', N'ar-IQ', N'阿拉伯语 - 伊拉克');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'ar-JO', N'ar-JO', N'阿拉伯语 - 约旦');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'ar-KW', N'ar-KW', N'阿拉伯语 - 科威特');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'ar-LB', N'ar-LB', N'阿拉伯语 - 黎巴嫩');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'ar-LY', N'ar-LY', N'阿拉伯语 - 利比亚');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'ar-MA', N'ar-MA', N'阿拉伯语 - 摩洛哥');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'ar-OM', N'ar-OM', N'阿拉伯语 - 阿曼');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'ar-QA', N'ar-QA', N'阿拉伯语 - 卡塔尔');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'ar-SA', N'ar-SA', N'阿拉伯语 - 沙特阿拉伯');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'ar-SY', N'ar-SY', N'阿拉伯语 - 叙利亚');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'ar-TN', N'ar-TN', N'阿拉伯语 - 突尼斯');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'ar-YE', N'ar-YE', N'阿拉伯语 - 也门');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'az', N'az', N'阿泽里语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'be', N'be', N'白俄罗斯语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'be-BY', N'be-BY', N'白俄罗斯语 - 白俄罗斯');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'bg', N'bg', N'保加利亚语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'bg-BG', N'bg-BG', N'保加利亚语 - 保加利亚');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'ca', N'ca', N'加泰罗尼亚语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'ca-ES', N'ca-ES', N'加泰罗尼亚语 - 加泰罗尼亚地区');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'cs', N'cs', N'捷克语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'cs-CZ', N'cs-CZ', N'捷克语 - 捷克共和国');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'da', N'da', N'丹麦语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'da-DK', N'da-DK', N'丹麦语 - 丹麦');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'de', N'de', N'德语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'de-AT', N'de-AT', N'德语 - 奥地利');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'de-CH', N'de-CH', N'德语 - 瑞士');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'de-DE', N'de-DE', N'德语 - 德国');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'de-LI', N'de-LI', N'德语 - 列支敦士登');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'de-LU', N'de-LU', N'德语 - 卢森堡');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'div', N'div', N'马尔代夫语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'div-MV', N'div-MV', N'马尔代夫语 - 马尔代夫');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'el', N'el', N'希腊语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'el-AT', N'el-AT', N'希腊语 - 希腊');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'en', N'en', N'英语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'en-AU', N'en-AU', N'英语 - 澳大利亚');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'en-BZ', N'en-BZ', N'英语 - 伯利兹');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'en-CA', N'en-CA', N'英语 - 加拿大');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'en-CB', N'en-CB', N'英语 - 加勒比');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'en-GB', N'en-GB', N'英语 - 英国');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'en-IE', N'en-IE', N'英语 - 爱尔兰');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'en-JM', N'en-JM', N'英语 - 牙买加');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'en-NZ', N'en-NZ', N'英语 - 新西兰');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'en-PH', N'en-PH', N'英语 - 菲律宾');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'en-TT', N'en-TT', N'英语 - 特立尼达和多巴哥');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'en-US', N'en-US', N'英语 - 美国');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'en-ZA', N'en-ZA', N'英语 - 南非');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'en-ZW', N'en-ZW', N'英语 - 津巴布韦');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'es', N'es', N'西班牙语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'es-AR', N'es-AR', N'西班牙语 - 阿根廷');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'es-BO', N'es-BO', N'西班牙语 - 玻利维亚');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'es-CL', N'es-CL', N'西班牙语 - 智利');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'es-CO', N'es-CO', N'西班牙语 - 哥伦比亚');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'es-CR', N'es-CR', N'西班牙语 - 哥斯达黎加');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'es-DO', N'es-DO', N'西班牙语  - 多米尼加共和国');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'es-EC', N'es-EC', N'西班牙语 - 厄瓜多尔');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'es-ES', N'es-ES', N'西班牙语 - 西班牙');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'es-GT', N'es-GT', N'西班牙语 - 危地马拉');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'es-HN', N'es-HN', N'西班牙语 - 洪都拉斯');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'es-MX', N'es-MX', N'西班牙语 - 墨西哥');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'es-NI', N'es-NI', N'西班牙语 - 尼加拉瓜');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'es-PA', N'es-PA', N'西班牙语 - 巴拿马');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'es-PE', N'es-PE', N'西班牙 - 秘鲁');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'es-PR', N'es-PR', N'西班牙语 - 波多黎各');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'es-PY', N'es-PY', N'西班牙语 - 巴拉圭');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'es-SV', N'es-SV', N'西班牙语 - 萨尔瓦多');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'es-UY', N'es-UY', N'西班牙语 - 乌拉圭');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'es-VE', N'es-VE', N'西班牙语 - 委内瑞拉');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'et', N'et', N'爱沙尼亚语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'et-EE', N'et-EE', N'爱沙尼亚语 - 爱沙尼亚');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'eu', N'eu', N'巴斯克语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'eu-ES', N'eu-ES', N'巴斯克语 - 巴斯克地区');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'fa', N'fa', N'波斯语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'fa-IR', N'fa-IR', N'波斯语 - 伊朗');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'fi', N'fi', N'芬兰语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'fi-FI', N'fi-FI', N'芬兰语 - 芬兰');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'fo', N'fo', N'法罗语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'fo-FO', N'fo-FO', N'法罗语 - 法罗群岛');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'fr', N'fr', N'法语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'fr-BE', N'fr-BE', N'法语 - 比利时');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'fr-CA', N'fr-CA', N'法语 - 加拿大');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'fr-CH', N'fr-CH', N'法语 - 瑞士');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'fr-FR', N'fr-FR', N'法语 - 法国');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'fr-LU', N'fr-LU', N'法语 - 卢森堡');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'fr-MC', N'fr-MC', N'法语 - 摩纳哥');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'gl', N'gl', N'加利西亚语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'gl-ES', N'gl-ES', N'加利西亚语 - 加利西亚地区');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'gu', N'gu', N'古吉拉特语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'gu-IN', N'gu-IN', N'古吉拉特语 - 印度');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'he', N'he', N'希伯来语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'he-IN', N'he-IN', N'希伯来语 - 以色列');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'hi', N'hi', N'印地语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'hi-IN', N'hi-IN', N'印地语 - 印度');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'hr', N'hr', N'克罗地亚语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'hr-HR', N'hr-HR', N'克罗地亚语 - 克罗地亚');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'hu', N'hu', N'匈牙利语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'hu-HU', N'hu-HU', N'匈牙利语 - 匈牙利');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'hy', N'hy', N'亚美尼亚语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'hy-AM', N'hy-AM', N'亚美尼亚语 - 亚美尼亚');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'id', N'id', N'印度尼西亚语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'id-ID', N'id-ID', N'印度尼西亚语 - 印度尼西亚');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'is', N'is', N'冰岛语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'is-IS', N'is-IS', N'冰岛语 - 冰岛');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'it', N'it', N'意大利语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'it-CH', N'it-CH', N'意大利语 - 瑞士');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'it-IT', N'it-IT', N'意大利语 - 意大利');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'ja', N'ja', N'日语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'ja-JP', N'ja-JP', N'日语 - 日本');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'ka', N'ka', N'格鲁吉亚语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'ka-GE', N'ka-GE', N'格鲁吉亚语 - 格鲁吉亚');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'kk', N'kk', N'哈萨克语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'kk-KZ', N'kk-KZ', N'哈萨克语 - 哈萨克斯坦');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'kn', N'kn', N'卡纳达语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'kn-IN', N'kn-IN', N'卡纳达语 - 印度');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'ko', N'ko', N'朝鲜语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'kok', N'kok', N'贡根语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'kok-IN', N'kok-IN', N'贡根语 - 印度');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'ko-KR', N'ko-KR', N'朝鲜语 - 韩国');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'ky', N'ky', N'吉尔吉斯语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'ky-KG', N'ky-KG', N'吉尔吉斯语 - 吉尔吉斯坦');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'lt', N'lt', N'立陶宛语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'lt-LT', N'lt-LT', N'立陶宛语 - 立陶宛');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'lv', N'lv', N'拉脱维亚语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'lv-LV', N'lv-LV', N'拉脱维亚语 - 拉脱维亚');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'mk', N'mk', N'马其顿语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'mk-MK', N'mk-MK', N'马其顿语 - 前南斯拉夫联盟马其顿共和国');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'mn', N'mn', N'蒙古语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'mn-MN', N'mn-MN', N'蒙古语 - 蒙古');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'mr', N'mr', N'马拉地语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'mr-IN', N'mr-IN', N'马拉地语 - 印度');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'ms', N'ms', N'马来语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'ms-BN', N'ms-BN', N'马来语 - 文莱');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'ms-MY', N'ms-MY', N'马来语 - 马来西亚');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'nb-NO', N'nb-NO', N'挪威语（伯克梅尔）- 挪威');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'nl', N'nl', N'荷兰语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'nl-BE', N'nl-BE', N'荷兰语 - 比利时');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'nl-NL', N'nl-NL', N'荷兰语 - 荷兰');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'nn-NO', N'nn-NO', N'挪威语（尼诺斯克）- 挪威');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'no', N'no', N'挪威语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'pa', N'pa', N'旁遮普语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'pa-IN', N'pa-IN', N'旁遮普语 - 印度');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'pl', N'pl', N'波兰语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'pl-PL', N'pl-PL', N'波兰语 - 波兰');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'pt', N'pt', N'葡萄牙语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'pt-BR', N'pt-BR', N'葡萄牙语 - 巴西');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'pt-PT', N'pt-PT', N'葡萄牙语 - 葡萄牙');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'ro', N'ro', N'罗马尼亚语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'ro-RO', N'ro-RO', N'罗马尼亚语 - 罗马尼亚');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'ru', N'ru', N'俄语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'ru-RU', N'ru-RU', N'俄语 - 俄罗斯');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'sa', N'sa', N'梵语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'sa-IN', N'sa-IN', N'梵语 - 印度');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'sk', N'sk', N'斯洛伐克语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'sk-SK', N'sk-SK', N'斯洛伐克语 - 斯洛伐克');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'sl', N'sl', N'斯洛文尼亚语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'sl-SI', N'sl-SI', N'斯洛文尼亚语 - 斯洛文尼亚');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'sq', N'sq', N'阿尔巴尼亚语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'sq-AL', N'sq-AL', N'阿尔巴尼亚语 - 阿尔巴尼亚');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'sv', N'sv', N'瑞典语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'sv-FI', N'sv-FI', N'瑞典语 - 芬兰');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'sv-SE', N'sv-SE', N'瑞典语 - 瑞典');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'sw', N'sw', N'斯瓦希里语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'sw-KE', N'sw-KE', N'斯瓦希里语 - 肯尼亚');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'syr', N'syr', N'叙利亚语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'syr-SY', N'syr-SY', N'叙利亚语 - 叙利亚');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'ta', N'ta', N'泰米尔语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'ta-IN', N'ta-IN', N'泰米尔语 - 印度');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'te', N'te', N'泰卢固语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'te-IN', N'te-IN', N'泰卢固语 - 印度');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'th', N'th', N'泰语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'th-TH', N'th-TH', N'泰语 - 泰国');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'tr', N'tr', N'土耳其语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'tr-TR', N'tr-TR', N'土耳其语 - 土耳其');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'tt', N'tt', N'鞑靼语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'tt-RU', N'tt-RU', N'鞑靼语 - 俄罗斯');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'uk', N'uk', N'乌克兰语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'uk-UA', N'uk-UA', N'乌克兰语 - 乌克兰');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'ur', N'ur', N'乌尔都语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'ur-PK', N'ur-PK', N'乌尔都语 - 巴基斯坦');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'uz', N'uz', N'乌兹别克语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'vi', N'vi', N'越南语');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'vi-VN', N'vi-VN', N'越南语 - 越南');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'zh-CHS', N'zh-CHS', N'中文（简体）');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'zh-CHT', N'zh-CHT', N'中文（繁体）');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'zh-CN', N'zh-CN', N'中文 - 中国');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'zh-HK', N'zh-HK', N'中文 - 香港特别行政区');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'zh-MO', N'zh-MO', N'中文 - 澳门特别行政区');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'zh-SG', N'zh-SG', N'中文 - 新加坡');
INSERT INTO ECPLangCodeDict (ID, Code, Name) VALUES (N'zh-TW', N'zh-TW', N'中文 - 台湾');

DELETE FROM ECPRegionCodeDict
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'AE', N'AE', N'阿拉伯联合酋长国', N'United Arab Emirates', N'971')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'AF', N'AF', N'阿富汗', N'Afghanistan', N'93')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'AG', N'AG', N'安提瓜和巴布达', N'Antigua and Barbuda', N'1268')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'AI', N'AI', N'安圭拉岛', N'Anguilla', N'1264')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'AL', N'AL', N'阿尔巴尼亚', N'Albania', N'355')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'AM', N'AM', N'亚美尼亚', N'Armenia', N'374')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'AO', N'AO', N'安哥拉', N'An;la', N'244')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'AR', N'AR', N'阿根廷', N'Argentina', N'54')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'Ascensio', N'Ascensio', N'阿森松', N'Ascension', N'247')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'AT', N'AT', N'奥地利', N'Austria', N'43')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'AU', N'AU', N'澳大利亚', N'Australia', N'61')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'AZ', N'AZ', N'阿塞拜疆', N'Azerbaijan', N'994')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'BB', N'BB', N'巴巴多斯', N'Barbados', N'1246')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'BD', N'BD', N'孟加拉国', N'Bangladesh', N'880')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'BE', N'BE', N'比利时', N'Belgium', N'32')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'BF', N'BF', N'布基纳法索', N'Burkina-faso', N'226')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'BG', N'BG', N'保加利亚', N'Bulgaria', N'359')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'BH', N'BH', N'巴林', N'Bahrain', N'973')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'BI', N'BI', N'布隆迪', N'Burundi', N'257')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'BJ', N'BJ', N'贝宁', N'Benin', N'229')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'BM', N'BM', N'百慕大群岛', N'Bermuda Is.', N'1441')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'BN', N'BN', N'文莱', N'Brunei', N'673')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'BO', N'BO', N'玻利维亚', N'Bolivia', N'591')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'BR', N'BR', N'巴西', N'Brazil', N'55')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'BS', N'BS', N'巴哈马', N'Bahamas', N'1242')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'BW', N'BW', N'博茨瓦纳', N'Botswana', N'267')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'BY', N'BY', N'白俄罗斯', N'Belarus', N'375')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'BZ', N'BZ', N'伯利兹', N'Belize', N'501')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'CA', N'CA', N'加拿大', N'Canada', N'1')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'Cayman I', N'Cayman I', N'开曼群岛', N'Cayman Is.', N'1345')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'CF', N'CF', N'中非共和国', N'Central African Republic', N'236')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'CG', N'CG', N'刚果', N'Con;', N'242')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'CH', N'CH', N'瑞士', N'Switzerland', N'41')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'CK', N'CK', N'库克群岛', N'Cook Is.', N'682')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'CL', N'CL', N'智利', N'Chile', N'56')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'CM', N'CM', N'喀麦隆', N'Cameroon', N'237')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'CN', N'CN', N'中国', N'China', N'86')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'CO', N'CO', N'哥伦比亚', N'Colombia', N'57')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'CR', N'CR', N'哥斯达黎加', N'Costa Rica', N'506')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'CU', N'CU', N'古巴', N'Cuba', N'53')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'CY', N'CY', N'塞浦路斯', N'Cyprus', N'357')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'CZ', N'CZ', N'捷克', N'Czech Republic', N'420')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'DE', N'DE', N'德国', N'Germany', N'49')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'DJ', N'DJ', N'吉布提', N'Djibouti', N'253')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'DK', N'DK', N'丹麦', N'Denmark', N'45')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'DO', N'DO', N'多米尼加共和国', N'Dominica Rep.', N'1890')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'DZ', N'DZ', N'阿尔及利亚', N'Algeria', N'213')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'EC', N'EC', N'厄瓜多尔', N'Ecuador', N'593')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'EE', N'EE', N'爱沙尼亚', N'Estonia', N'372')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'EG', N'EG', N'埃及', N'Egypt', N'20')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'ES', N'ES', N'西班牙', N'Spain', N'34')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'ET', N'ET', N'埃塞俄比亚', N'Ethiopia', N'251')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'FI', N'FI', N'芬兰', N'Finland', N'358')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'FJ', N'FJ', N'斐济', N'Fiji', N'679')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'FR', N'FR', N'法国', N'France', N'33')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'GA', N'GA', N'加蓬', N'Gabon', N'241')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'GB', N'GB', N'英国', N'United Kiongdom', N'44')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'GD', N'GD', N'格林纳达', N'Grenada', N'1809')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'GE', N'GE', N'格鲁吉亚', N'Georgia', N'995')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'GF', N'GF', N'法属圭亚那', N'French Guiana', N'594')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'GH', N'GH', N'加纳', N'Ghana', N'233')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'GI', N'GI', N'直布罗陀', N'Gibraltar', N'350')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'GM', N'GM', N'冈比亚', N'Gambia', N'220')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'GN', N'GN', N'几内亚', N'Guinea', N'224')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'GR', N'GR', N'希腊', N'Greece', N'30')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'GT', N'GT', N'危地马拉', N'Guatemala', N'502')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'GU', N'GU', N'关岛', N'Guam', N'1671')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'GY', N'GY', N'圭亚那', N'Guyana', N'592')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'HK', N'HK', N'香港', N'Hongkong', N'852')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'HN', N'HN', N'洪都拉斯', N'Honduras', N'504')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'HT', N'HT', N'海地', N'Haiti', N'509')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'HU', N'HU', N'匈牙利', N'Hungary', N'36')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'ID', N'ID', N'印度尼西亚', N'Indonesia', N'62')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'IE', N'IE', N'爱尔兰', N'Ireland', N'353')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'IL', N'IL', N'以色列', N'Israel', N'972')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'IN', N'IN', N'印度', N'India', N'91')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'IQ', N'IQ', N'伊拉克', N'Iraq', N'964')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'IR', N'IR', N'伊朗', N'Iran', N'98')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'IS', N'IS', N'冰岛', N'Iceland', N'354')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'IT', N'IT', N'意大利', N'Italy', N'39')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'JM', N'JM', N'牙买加', N'Jamaica', N'1876')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'JO', N'JO', N'约旦', N'Jordan', N'962')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'JP', N'JP', N'日本', N'Japan', N'81')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'KE', N'KE', N'肯尼亚', N'Kenya', N'254')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'KG', N'KG', N'吉尔吉斯坦', N'Kyrgyzstan', N'331')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'KH', N'KH', N'柬埔寨', N'Kampuchea (Cambodia)', N'855')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'KP', N'KP', N'朝鲜', N'North Korea', N'850')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'KR', N'KR', N'韩国', N'Korea', N'82')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'KT', N'KT', N'科特迪瓦', N'Ivory Coast', N'225')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'KW', N'KW', N'科威特', N'Kuwait', N'965')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'KZ', N'KZ', N'哈萨克斯坦', N'Kazakstan', N'327')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'LA', N'LA', N'老挝', N'Laos', N'856')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'LB', N'LB', N'黎巴嫩', N'Lebanon', N'961')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'LC', N'LC', N'圣卢西亚', N'St.Lucia', N'1758')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'LI', N'LI', N'列支敦士登', N'Liechtenstein', N'423')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'LK', N'LK', N'斯里兰卡', N'Sri Lanka', N'94')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'LR', N'LR', N'利比里亚', N'Liberia', N'231')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'LS', N'LS', N'莱索托', N'Lesotho', N'266')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'LT', N'LT', N'立陶宛', N'Lithuania', N'370')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'LU', N'LU', N'卢森堡', N'Luxembourg', N'352')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'LV', N'LV', N'拉脱维亚', N'Latvia', N'371')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'LY', N'LY', N'利比亚', N'Libya', N'218')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'MA', N'MA', N'摩洛哥', N'Morocco', N'212')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'Mariana ', N'Mariana ', N'马里亚那群岛', N'Mariana Is', N'1670')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'Martiniq', N'Martiniq', N'马提尼克', N'Martinique', N'596')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'MC', N'MC', N'摩纳哥', N'Monaco', N'377')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'MG', N'MG', N'马达加斯加', N'Madagascar', N'261')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'ML', N'ML', N'马里', N'Mali', N'223')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'MM', N'MM', N'缅甸', N'Burma', N'95')
;
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'MN', N'MN', N'蒙古', N'Mon;lia', N'976')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'MO', N'MO', N'澳门', N'Macao', N'853')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'MS', N'MS', N'蒙特塞拉特岛', N'Montserrat Is', N'1664')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'MT', N'MT', N'马耳他', N'Malta', N'356')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'MU', N'MU', N'毛里求斯', N'Mauritius', N'230')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'MV', N'MV', N'马尔代夫', N'Maldives', N'960')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'MW', N'MW', N'马拉维', N'Malawi', N'265')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'MX', N'MX', N'墨西哥', N'Mexico', N'52')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'MY', N'MY', N'马来西亚', N'Malaysia', N'60')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'MZ', N'MZ', N'莫桑比克', N'Mozambique', N'258')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'NA', N'NA', N'纳米比亚', N'Namibia', N'264')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'NE', N'NE', N'尼日尔', N'Niger', N'227')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'Netheria', N'Netheria', N'荷属安的列斯', N'Netheriands Antilles', N'599')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'NG', N'NG', N'尼日利亚', N'Nigeria', N'234')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'NI', N'NI', N'尼加拉瓜', N'Nicaragua', N'505')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'NL', N'NL', N'荷兰', N'Netherlands', N'31')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'NO', N'NO', N'挪威', N'Norway', N'47')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'NP', N'NP', N'尼泊尔', N'Nepal', N'977')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'NR', N'NR', N'瑙鲁', N'Nauru', N'674')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'NZ', N'NZ', N'新西兰', N'New Zealand', N'64')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'OM', N'OM', N'阿曼', N'Oman', N'968')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'PA', N'PA', N'巴拿马', N'Panama', N'507')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'PE', N'PE', N'秘鲁', N'Peru', N'51')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'PF', N'PF', N'法属玻利尼西亚', N'French Polynesia', N'689')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'PG', N'PG', N'巴布亚新几内亚', N'Papua New Cuinea', N'675')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'PH', N'PH', N'菲律宾', N'Philippines', N'63')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'PK', N'PK', N'巴基斯坦', N'Pakistan', N'92')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'PL', N'PL', N'波兰', N'Poland', N'48')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'PR', N'PR', N'波多黎各', N'Puerto Rico', N'1787')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'PT', N'PT', N'葡萄牙', N'Portugal', N'351')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'PY', N'PY', N'巴拉圭', N'Paraguay', N'595')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'QA', N'QA', N'卡塔尔', N'Qatar', N'974')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'Reunion', N'Reunion', N'留尼旺', N'Reunion', N'262')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'RO', N'RO', N'罗马尼亚', N'Romania', N'40')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'RU', N'RU', N'俄罗斯', N'Russia', N'7')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'SA', N'SA', N'沙特阿拉伯', N'Saudi Arabia', N'966')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'Samoa Ea', N'Samoa Ea', N'东萨摩亚(美)', N'Samoa Eastern', N'684')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'San Mari', N'San Mari', N'西萨摩亚', N'San Marino', N'685')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'SB', N'SB', N'所罗门群岛', N'Solomon Is', N'677')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'SC', N'SC', N'塞舌尔', N'Seychelles', N'248')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'SD', N'SD', N'苏丹', N'Sudan', N'249')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'SE', N'SE', N'瑞典', N'Sweden', N'46')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'SG', N'SG', N'新加坡', N'Singapore', N'65')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'SI', N'SI', N'斯洛文尼亚', N'Slovenia', N'386')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'SK', N'SK', N'斯洛伐克', N'Slovakia', N'421')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'SL', N'SL', N'塞拉利昂', N'Sierra Leone', N'232')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'SM', N'SM', N'圣马力诺', N'San Marino', N'378')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'SN', N'SN', N'塞内加尔', N'Senegal', N'221')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'SO', N'SO', N'索马里', N'Somali', N'252')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'SR', N'SR', N'苏里南', N'Suriname', N'597')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'ST', N'ST', N'圣多美和普林西比', N'Sao Tome and Principe', N'239')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'SV', N'SV', N'萨尔瓦多', N'EI Salvador', N'503')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'SY', N'SY', N'叙利亚', N'Syria', N'963')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'SZ', N'SZ', N'斯威士兰', N'Swaziland', N'268')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'TD', N'TD', N'乍得', N'Chad', N'235')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'TG', N'TG', N'多哥', N'To;', N'228')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'TH', N'TH', N'泰国', N'Thailand', N'66')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'TJ', N'TJ', N'塔吉克斯坦', N'Tajikstan', N'992')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'TM', N'TM', N'土库曼斯坦', N'Turkmenistan', N'993')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'TN', N'TN', N'突尼斯', N'Tunisia', N'216')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'TO', N'TO', N'汤加', N'Tonga', N'676')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'TR', N'TR', N'土耳其', N'Turkey', N'90')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'TT', N'TT', N'特立尼达和多巴哥', N'Trinidad and Toba;', N'1809')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'TW', N'TW', N'台湾省', N'Taiwan', N'886')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'TZ', N'TZ', N'坦桑尼亚', N'Tanzania', N'255')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'UA', N'UA', N'乌克兰', N'Ukraine', N'380')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'UG', N'UG', N'乌干达', N'Uganda', N'256')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'US', N'US', N'美国', N'United States of America', N'1')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'UY', N'UY', N'乌拉圭', N'Uruguay', N'598')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'UZ', N'UZ', N'乌兹别克斯坦', N'Uzbekistan', N'233')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'VC', N'VC', N'圣文森特', N'St.Vincent', N'1784')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'VE', N'VE', N'委内瑞拉', N'Venezuela', N'58')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'VN', N'VN', N'越南', N'Vietnam', N'84')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'YE', N'YE', N'也门', N'Yemen', N'967')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'YU', N'YU', N'南斯拉夫', N'Yu;slavia', N'381')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'ZA', N'ZA', N'南非', N'南非', N'27')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'ZM', N'ZM', N'赞比亚', N'Zambia', N'260')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'ZR', N'ZR', N'扎伊尔', N'Zaire', N'243')
;
INSERT INTO ECPRegionCodeDict (ID, Code, Name, EnName, CountryCode) VALUES (N'ZW', N'ZW', N'津巴布韦', N'Zimbabwe', N'263')
;

Delete From ECPTimeZone
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Dateline Standard Time','(UTC-12:00) 国际日期变更线西','-12')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('UTC-11','(UTC-11:00) 协调世界时-11','-11')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Hawaiian Standard Time','(UTC-10:00) 夏威夷','-10')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Aleutian Standard Time','(UTC-10:00) 阿留申群岛','-10')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Marquesas Standard Time','(UTC-09:30) 马克萨斯群岛','-9.5')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('UTC-09','(UTC-09:00) 协调世界时-09','-9')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Alaskan Standard Time','(UTC-09:00) 阿拉斯加','-9')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Pacific Standard Time (Mexico)','(UTC-08:00) 下加利福尼亚州','-8')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('UTC-08','(UTC-08:00) 协调世界时-08','-8')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Pacific Standard Time','(UTC-08:00) 太平洋时间(美国和加拿大)','-8')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('US Mountain Standard Time','(UTC-07:00) 亚利桑那','-7')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Mountain Standard Time (Mexico)','(UTC-07:00) 奇瓦瓦，拉巴斯，马萨特兰','-7')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Mountain Standard Time','(UTC-07:00) 山地时间(美国和加拿大)','-7')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Central America Standard Time','(UTC-06:00) 中美洲','-6')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Central Standard Time','(UTC-06:00) 中部时间(美国和加拿大)','-6')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Easter Island Standard Time','(UTC-06:00) 复活节岛','-6')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Central Standard Time (Mexico)','(UTC-06:00) 瓜达拉哈拉，墨西哥城，蒙特雷','-6')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Canada Central Standard Time','(UTC-06:00) 萨斯喀彻温','-6')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Eastern Standard Time','(UTC-05:00) 东部时间(美国和加拿大)','-5')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Eastern Standard Time (Mexico)','(UTC-05:00) 切图马尔','-5')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('US Eastern Standard Time','(UTC-05:00) 印地安那州(东部)','-5')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Cuba Standard Time','(UTC-05:00) 哈瓦那','-5')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('SA Pacific Standard Time','(UTC-05:00) 波哥大，利马，基多，里奥布朗库','-5')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Haiti Standard Time','(UTC-05:00) 海地','-5')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('SA Western Standard Time','(UTC-04:00) 乔治敦，拉巴斯，马瑙斯，圣胡安','-4')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Paraguay Standard Time','(UTC-04:00) 亚松森','-4')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Venezuela Standard Time','(UTC-04:00) 加拉加斯','-4')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Pacific SA Standard Time','(UTC-04:00) 圣地亚哥','-4')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Atlantic Standard Time','(UTC-04:00) 大西洋时间(加拿大)','-4')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Central Brazilian Standard Time','(UTC-04:00) 库亚巴','-4')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Turks And Caicos Standard Time','(UTC-04:00) 特克斯和凯科斯群岛','-4')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Newfoundland Standard Time','(UTC-03:30) 纽芬兰','-3.5')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('SA Eastern Standard Time','(UTC-03:00) 卡宴，福塔雷萨','-3')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Saint Pierre Standard Time','(UTC-03:00) 圣皮埃尔和密克隆群岛','-3')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('E. South America Standard Time','(UTC-03:00) 巴西利亚','-3')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Argentina Standard Time','(UTC-03:00) 布宜诺斯艾利斯','-3')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Greenland Standard Time','(UTC-03:00) 格陵兰','-3')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Bahia Standard Time','(UTC-03:00) 萨尔瓦多','-3')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Montevideo Standard Time','(UTC-03:00) 蒙得维的亚','-3')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Tocantins Standard Time','(UTC-03:00) 阿拉瓜伊纳','-3')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Mid-Atlantic Standard Time','(UTC-02:00) 中大西洋 - 旧用','-2')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('UTC-02','(UTC-02:00) 协调世界时-02','-2')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Azores Standard Time','(UTC-01:00) 亚速尔群岛','-1')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Cape Verde Standard Time','(UTC-01:00) 佛得角群岛','-1')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('UTC','(UTC) 协调世界时','0')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Morocco Standard Time','(UTC+00:00) 卡萨布兰卡','0')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Greenwich Standard Time','(UTC+00:00) 蒙罗维亚，雷克雅未克','0')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('GMT Standard Time','(UTC+00:00) 都柏林，爱丁堡，里斯本，伦敦','0')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('W. Central Africa Standard Time','(UTC+01:00) 中非西部','1')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Romance Standard Time','(UTC+01:00) 布鲁塞尔，哥本哈根，马德里，巴黎','1')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Namibia Standard Time','(UTC+01:00) 温得和克','1')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Central European Standard Time','(UTC+01:00) 萨拉热窝，斯科普里，华沙，萨格勒布','1')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Central Europe Standard Time','(UTC+01:00) 贝尔格莱德，布拉迪斯拉发，布达佩斯，卢布尔雅那，布拉格','1')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('W. Europe Standard Time','(UTC+01:00) 阿姆斯特丹，柏林，伯尔尼，罗马，斯德哥尔摩，维也纳','1')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Turkey Standard Time','(UTC+02:00) 伊斯坦布尔','2')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('West Bank Standard Time','(UTC+02:00) 加沙，希伯伦','2')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Kaliningrad Standard Time','(UTC+02:00) 加里宁格勒','2')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('South Africa Standard Time','(UTC+02:00) 哈拉雷，比勒陀利亚','2')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('E. Europe Standard Time','(UTC+02:00) 基希讷乌','2')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Syria Standard Time','(UTC+02:00) 大马士革','2')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Jordan Standard Time','(UTC+02:00) 安曼','2')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Egypt Standard Time','(UTC+02:00) 开罗','2')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Libya Standard Time','(UTC+02:00) 的黎波里','2')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Israel Standard Time','(UTC+02:00) 耶路撒冷','2')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Middle East Standard Time','(UTC+02:00) 贝鲁特','2')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('FLE Standard Time','(UTC+02:00) 赫尔辛基，基辅，里加，索非亚，塔林，维尔纽斯','2')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('GTB Standard Time','(UTC+02:00) 雅典，布加勒斯特','2')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('E. Africa Standard Time','(UTC+03:00) 内罗毕','3')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Arabic Standard Time','(UTC+03:00) 巴格达','3')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Belarus Standard Time','(UTC+03:00) 明斯克','3')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Arab Standard Time','(UTC+03:00) 科威特，利雅得','3')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Russian Standard Time','(UTC+03:00) 莫斯科，圣彼得堡，伏尔加格勒','3')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Iran Standard Time','(UTC+03:30) 德黑兰','3.5')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Russia Time Zone 3','(UTC+04:00) 伊热夫斯克，萨马拉','4')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Caucasus Standard Time','(UTC+04:00) 埃里温','4')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Azerbaijan Standard Time','(UTC+04:00) 巴库','4')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Georgian Standard Time','(UTC+04:00) 第比利斯','4')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Mauritius Standard Time','(UTC+04:00) 路易港','4')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Arabian Standard Time','(UTC+04:00) 阿布扎比，马斯喀特','4')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Astrakhan Standard Time','(UTC+04:00) 阿斯特拉罕，乌里扬诺夫斯克','4')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Afghanistan Standard Time','(UTC+04:30) 喀布尔','4.5')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Pakistan Standard Time','(UTC+05:00) 伊斯兰堡，卡拉奇','5')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Ekaterinburg Standard Time','(UTC+05:00) 叶卡捷琳堡','5')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('West Asia Standard Time','(UTC+05:00) 阿什哈巴德，塔什干','5')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Sri Lanka Standard Time','(UTC+05:30) 斯里加亚渥登普拉','5.5')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('India Standard Time','(UTC+05:30) 钦奈，加尔各答，孟买，新德里','5.5')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Nepal Standard Time','(UTC+05:45) 加德满都','5.75')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('N. Central Asia Standard Time','(UTC+06:00) 新西伯利亚','6')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Bangladesh Standard Time','(UTC+06:00) 达卡','6')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Central Asia Standard Time','(UTC+06:00) 阿斯塔纳','6')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Myanmar Standard Time','(UTC+06:30) 仰光','6.5')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('North Asia Standard Time','(UTC+07:00) 克拉斯诺亚尔斯克','7')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Altai Standard Time','(UTC+07:00) 巴尔瑙尔，戈尔诺-阿尔泰斯克','7')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Tomsk Standard Time','(UTC+07:00) 托木斯克','7')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('SE Asia Standard Time','(UTC+07:00) 曼谷，河内，雅加达','7')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('W. Mon;lia Standard Time','(UTC+07:00) 科布多','7')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Ulaanbaatar Standard Time','(UTC+08:00) 乌兰巴托','8')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('North Asia East Standard Time','(UTC+08:00) 伊尔库茨克','8')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('China Standard Time','(UTC+08:00) 北京，重庆，香港特别行政区，乌鲁木齐','8')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Taipei Standard Time','(UTC+08:00) 台北','8')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Singapore Standard Time','(UTC+08:00) 吉隆坡，新加坡','8')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('W. Australia Standard Time','(UTC+08:00) 珀斯','8')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('North Korea Standard Time','(UTC+08:30) 平壤','8.5')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Aus Central W. Standard Time','(UTC+08:45) 尤克拉','8.75')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Tokyo Standard Time','(UTC+09:00) 大阪，札幌，东京','9')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Transbaikal Standard Time','(UTC+09:00) 赤塔市','9')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Yakutsk Standard Time','(UTC+09:00) 雅库茨克','9')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Korea Standard Time','(UTC+09:00) 首尔','9')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('AUS Central Standard Time','(UTC+09:30) 达尔文','9.5')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Cen. Australia Standard Time','(UTC+09:30) 阿德莱德','9.5')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('West Pacific Standard Time','(UTC+10:00) 关岛，莫尔兹比港','10')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('AUS Eastern Standard Time','(UTC+10:00) 堪培拉，墨尔本，悉尼','10')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('E. Australia Standard Time','(UTC+10:00) 布里斯班','10')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Vladivostok Standard Time','(UTC+10:00) 符拉迪沃斯托克','10')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Tasmania Standard Time','(UTC+10:00) 霍巴特','10')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Lord Howe Standard Time','(UTC+10:30) 豪勋爵岛','10.5')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Russia Time Zone 10','(UTC+11:00) 乔库尔达赫','11')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Bougainville Standard Time','(UTC+11:00) 布干维尔岛','11')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Central Pacific Standard Time','(UTC+11:00) 所罗门群岛，新喀里多尼亚','11')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Sakhalin Standard Time','(UTC+11:00) 萨哈林','11')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Norfolk Standard Time','(UTC+11:00) 诺福克岛','11')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Magadan Standard Time','(UTC+11:00) 马加丹','11')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('UTC+12','(UTC+12:00) 协调世界时+12','12')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('New Zealand Standard Time','(UTC+12:00) 奥克兰，惠灵顿','12')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Kamchatka Standard Time','(UTC+12:00) 彼得罗巴甫洛夫斯克-堪察加 - 旧用','12')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Fiji Standard Time','(UTC+12:00) 斐济','12')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Russia Time Zone 11','(UTC+12:00) 阿纳德尔，堪察加彼得罗巴甫洛夫斯克','12')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Chatham Islands Standard Time','(UTC+12:45) 查塔姆群岛','12.75')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Tonga Standard Time','(UTC+13:00) 努库阿洛法','13')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Samoa Standard Time','(UTC+13:00) 萨摩亚群岛','13')
;
Insert Into ECPTimeZone(ID,Name,BaseOffset)values('Line Islands Standard Time','(UTC+14:00) 圣诞岛','14')
;