/*
 * jquery.socialshareprivacy.js | 2 Klicks fuer mehr Datenschutz
 *
 * http://www.heise.de/extras/socialshareprivacy/
 * http://www.heise.de/ct/artikel/2-Klicks-fuer-mehr-Datenschutz-1333879.html
 *
 * Copyright (c) 2011 Hilko Holweg, Sebastian Hilbig, Nicolas Heiringhoff, Juergen Schmidt,
 * Heise Zeitschriften Verlag GmbH & Co. KG, http://www.heise.de
 *
 * Copyright (c) 2012 Mathias Panzenböck
 *
 * is released under the MIT License http://www.opensource.org/licenses/mit-license.php
 *
 * Spread the word, link to us if you can.
 */
(function ($, undefined) {
	"use strict";

	$.extend($.fn.socialSharePrivacy.settings.services.facebook, {
		'dummy_line_img' : 'img/SocialSharePrivacy/nl/dummy_facebook.png',
		'txt_info'       : 'Ter verduidelijking: De Facebook knop wordt hiermee geactiveerd. Hiermee wordt data naar Facebook verzonden – Klik voor meer informatie op <em>i</em>.',
		'txt_off'        : 'niet verbonden met Facebook',
		'txt_on'         : 'verbonden met Facebook'
	});
})(jQuery);
