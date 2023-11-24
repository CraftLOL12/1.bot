const { EmbedBuilder, PermissionsBitField, PermissionFlagsBits, ActionRowBuilder, ButtonBuilder, ButtonStyle} = require("discord.js");
const discord = require("discord.js")

module.exports = {
    name: "yetkili-basvuru",
    description: "Yetkili başvuru EMBED'ını komutu kullandığınız kanala atar",
    type: 1,


    run: async (client, interaction) => {



        const woolexaticketembed = new EmbedBuilder()
        .setColor("#DC143C")
        .setAuthor({name: "TRCheck PUB Yetki", iconURL: interaction.guild.iconURL({ dynamic: true })})
        .setDescription("```ansi\n[2;31mŞart: Günde En Az 2 Paylaşım Yapılacak. \nDurum Kısmına veya Hitaplar Kısmına '.gg/trcheck' Yazısını Ekleyecek.[0m\```\n\```ansi\n[2;36mAlttan Başvur İşte Amk[0m```")
        .setFooter({text: "TRCheck Var mı Denk?"})
        .setTimestamp()

        const woolexarow = new ActionRowBuilder()
        .setComponents(
         new ButtonBuilder()
         .setLabel("PUB Başvuru")
         .setStyle(discord.ButtonStyle.Primary)
         .setCustomId("woolexayetkilibasvur")
         .setEmoji("1150517077921255556")
        )

        interaction.reply({ embeds: [woolexaticketembed], components: [woolexarow] });

 }
}